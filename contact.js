// ============================================================
//  KLIKOO DASHBOARD — dashboard.js
// ============================================================

'use strict';

// ════════════════════════════════════════════════════
//  KLIKOO DASHBOARD PRO — JS
// ════════════════════════════════════════════════════
'use strict';

const STORAGE_ORDERS  = 'klikoo_orders';
const STORAGE_CLIENTS = 'klikoo_clients';

let allOrders   = [];
let allClients  = [];
let filteredOrd = [];
let currentFilter = 'all';
let currentPage   = 1;
const PER_PAGE    = 10;
let chartVentes   = null;
let chartStatuts  = null;

// ── Collect orders from localStorage ──────────────────
function collectOrders() {
  let orders = [], usedKeys = [];
  try {
    Object.keys(localStorage).forEach(key => {
      try {
        const raw = localStorage.getItem(key);
        if (!raw || raw.length < 10) return;
        const data = JSON.parse(raw);
        if (!Array.isArray(data) || !data.length) return;
        const f = data[0];
        if (typeof f !== 'object' || f === null) return;
        const hasTotal = f.total !== undefined || f.montant !== undefined;
        const hasItems = f.items !== undefined || f.produits !== undefined;
        const hasId    = f.id !== undefined || f._id !== undefined;
        const hasDate  = f.date !== undefined || f.createdAt !== undefined;
        if ((hasTotal || hasItems) && (hasId || hasDate)) {
          data.forEach(o => {
            const total = parseFloat(o.total || o.montant || 0) || 0;
            const rawItems = o.items || o.produits || o.products || [];
            const items = Array.isArray(rawItems) ? rawItems.map(it => ({
              name: it.name || it.nom || 'Produit',
              price: parseFloat(it.price || it.prix || 0) || 0,
              qty: parseInt(it.qty || it.quantity || it.quantite || 1) || 1,
              subtotal: parseFloat(it.subtotal || 0) || (parseFloat(it.price || 0) * parseInt(it.qty || 1))
            })) : [];
            orders.push({
              id: o.id || o._id || ('CMD-'+Math.random().toString(36).substr(2,6).toUpperCase()),
              date: o.date || o.createdAt || new Date().toISOString(),
              client: o.client || { name: o.clientName || o.nom || '—', phone: o.phone || o.tel || '—', city: o.city || o.ville || '—' },
              items, total,
              livraison: o.livraison || (total >= 300 ? 'Gratuite' : '30 DH'),
              statut: o.statut || o.status || 'Nouveau'
            });
          });
          usedKeys.push(key);
        }
      } catch(e) {}
    });
  } catch(e) {}
  // deduplicate
  const seen = {}, unique = [];
  orders.forEach(o => { if (!seen[o.id]) { seen[o.id]=true; unique.push(o); } });
  unique.sort((a,b) => new Date(b.date) - new Date(a.date));
  return unique;
}

function collectClients() {
  try {
    const raw = localStorage.getItem(STORAGE_CLIENTS);
    if (raw) return JSON.parse(raw) || [];
  } catch(e) {}
  // build from orders
  const map = {};
  allOrders.forEach(o => {
    const key = o.client.phone || o.client.name;
    if (!map[key]) map[key] = { ...o.client, orderCount: 0, totalSpent: 0, lastOrder: o.date };
    map[key].orderCount++;
    map[key].totalSpent += o.total;
    if (new Date(o.date) > new Date(map[key].lastOrder)) map[key].lastOrder = o.date;
  });
  return Object.values(map);
}

// ── Navigation ─────────────────────────────────────────
function navigate(page, el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('page-'+page).classList.add('active');

  const titles = { overview:'Vue d\'ensemble', orders:'Commandes', products:'Produits', clients:'Clients' };
  const subs   = { overview:'Dashboard', orders:'Gestion des commandes', products:'Catalogue', clients:'Base de données' };
  document.getElementById('topbarTitle').innerHTML = titles[page] + ' <span>' + subs[page] + '</span>';

  if (page === 'orders')   renderOrdersTable();
  if (page === 'products') renderProductsPage();
  if (page === 'clients')  renderClientsPage();
  closeSidebar();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOv').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOv').classList.remove('open');
}

// ── Init ───────────────────────────────────────────────
function init() {
  allOrders  = collectOrders();
  allClients = collectClients();
  filteredOrd = [...allOrders];

  // Update nav badges
  document.getElementById('navBadgeOrders').textContent  = allOrders.length;
  document.getElementById('navBadgeClients').textContent = allClients.length;

  const prodsCount = (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) ? PRODUCTS.length : '—';
  document.getElementById('navBadgeProds').textContent = prodsCount;

  if (allOrders.length === 0) {
    document.getElementById('demoBanner').style.display = 'flex';
  }

  renderKPIs();
  renderCharts();
  renderTopProds();
  renderActivity();
}

// ── KPIs ───────────────────────────────────────────────
function animNum(el, target, suffix='', decimals=0) {
  const dur = 900, start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1-p, 3);
    el.textContent = (target * ease).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

function renderKPIs() {
  const total  = allOrders.reduce((s,o) => s+o.total, 0);
  const panier = allOrders.length ? Math.round(total/allOrders.length) : 0;

  const today = new Date().toDateString();
  const todayOrders  = allOrders.filter(o => new Date(o.date).toDateString() === today);
  const todaySales   = todayOrders.reduce((s,o) => s+o.total, 0);
  const pending      = allOrders.filter(o => o.statut === 'Nouveau').length;

  const now = new Date();
  const thisMonth = allOrders.filter(o => {
    const d = new Date(o.date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
  const lastMonth = allOrders.filter(o => {
    const d = new Date(o.date);
    const lm = new Date(now.getFullYear(), now.getMonth()-1, 1);
    return d.getMonth() === lm.getMonth() && d.getFullYear() === lm.getFullYear();
  });
  const thisMonthSales = thisMonth.reduce((s,o) => s+o.total, 0);
  const lastMonthSales = lastMonth.reduce((s,o) => s+o.total, 0);
  const trendPct = lastMonthSales > 0 ? Math.round((thisMonthSales-lastMonthSales)/lastMonthSales*100) : 0;

  animNum(document.getElementById('kpiVentes'), total, ' DH');
  animNum(document.getElementById('kpiOrders'), allOrders.length);
  animNum(document.getElementById('kpiClients'), allClients.length);
  animNum(document.getElementById('kpiPanier'), panier, ' DH');

  document.getElementById('kpiVentesSub').textContent  = todaySales > 0 ? `${todaySales} DH aujourd'hui` : 'Aucune vente aujourd\'hui';
  document.getElementById('kpiOrdersSub').textContent  = `${pending} en attente`;
  document.getElementById('kpiClientsSub').textContent = `${thisMonth.length} nouveaux ce mois`;

  const tv = document.getElementById('kpiVentesTrend');
  tv.textContent = trendPct >= 0 ? `↑ ${trendPct}%` : `↓ ${Math.abs(trendPct)}%`;
  tv.className = 'kpi-trend ' + (trendPct >= 0 ? 'up' : 'down');
}

// ── Charts ─────────────────────────────────────────────
function renderCharts() {
  const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const ventesMois = new Array(12).fill(0);
  const year = new Date().getFullYear();
  document.getElementById('chartYear').textContent = year;

  allOrders.forEach(o => {
    if (new Date(o.date).getFullYear() === year) {
      ventesMois[new Date(o.date).getMonth()] += o.total;
    }
  });

  const statuts = { 'Nouveau':0, 'Confirmé':0, 'Livré':0, 'Annulé':0 };
  allOrders.forEach(o => { if (statuts[o.statut] !== undefined) statuts[o.statut]++; else statuts['Nouveau']++; });

  // Destroy old charts
  if (chartVentes)  { chartVentes.destroy(); chartVentes = null; }
  if (chartStatuts) { chartStatuts.destroy(); chartStatuts = null; }

  Chart.defaults.color = '#9090a8';
  Chart.defaults.font.family = "'Space Grotesk', sans-serif";

  chartVentes = new Chart(document.getElementById('chartVentes'), {
    type:'line',
    data:{
      labels: months,
      datasets:[{
        label:'Ventes (DH)',
        data: ventesMois,
        borderColor:'#ff8716',
        backgroundColor:'rgba(255,135,22,.1)',
        tension:.4, fill:true,
        pointBackgroundColor:'#ff8716',
        pointBorderColor:'#0a0a0f',
        pointBorderWidth:2,
        pointRadius:4,
        pointHoverRadius:7,
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:true,
      plugins:{ legend:{ display:false }, tooltip:{ callbacks:{ label: ctx => ' '+ctx.raw.toLocaleString()+' DH' } } },
      scales:{
        x:{ grid:{ color:'rgba(255,255,255,.04)' }, border:{ display:false } },
        y:{ grid:{ color:'rgba(255,255,255,.04)' }, border:{ display:false }, ticks:{ callback: v => v.toLocaleString()+' DH' } }
      }
    }
  });

  chartStatuts = new Chart(document.getElementById('chartStatuts'), {
    type:'doughnut',
    data:{
      labels: Object.keys(statuts),
      datasets:[{
        data: Object.values(statuts),
        backgroundColor:['#3b82f6','#ff8716','#22c55e','#ef4444'],
        borderColor:'#16161e', borderWidth:3,
        hoverOffset:8
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:true,
      cutout:'68%',
      plugins:{
        legend:{ position:'bottom', labels:{ padding:16, boxWidth:10, borderRadius:3 } },
        tooltip:{ callbacks:{ label: ctx => ` ${ctx.label}: ${ctx.raw}` } }
      }
    }
  });
}

// ── Top products ───────────────────────────────────────
function renderTopProds() {
  const map = {};
  allOrders.forEach(o => {
    o.items.forEach(it => {
      const k = it.name;
      if (!map[k]) map[k] = { qty:0, sales:0 };
      map[k].qty   += it.qty;
      map[k].sales += it.subtotal || (it.price * it.qty);
    });
  });

  const sorted = Object.entries(map).sort((a,b) => b[1].sales - a[1].sales).slice(0,6);
  const maxSales = sorted[0]?.[1]?.sales || 1;

  const ranks = ['gold','silver','bronze'];
  const el = document.getElementById('topProdsList');

  if (!sorted.length) {
    el.innerHTML = '<li style="padding:20px;text-align:center;color:var(--text3);font-size:13px">Aucune donnée</li>';
    return;
  }

  el.innerHTML = sorted.map(([name, data], i) => `
    <li class="top-prod-item">
      <div class="top-prod-rank ${ranks[i]||''}">${i+1}</div>
      <div class="top-prod-info">
        <div class="top-prod-name">${name}</div>
        <div class="top-prod-qty">${data.qty} vendus</div>
      </div>
      <div class="top-prod-bar-wrap">
        <div class="top-prod-bar" style="width:${Math.round(data.sales/maxSales*100)}%"></div>
      </div>
      <div class="top-prod-amt">${data.sales.toLocaleString()} DH</div>
    </li>
  `).join('');
}

// ── Activity ───────────────────────────────────────────
function renderActivity() {
  const el = document.getElementById('recentActivity');
  const recent = allOrders.slice(0,8);
  if (!recent.length) {
    el.innerHTML = '<li style="padding:20px;text-align:center;color:var(--text3);font-size:13px">Aucune activité</li>';
    return;
  }
  const colors = { 'Nouveau':'var(--blue)','Confirmé':'var(--orange)','Livré':'var(--green)','Annulé':'var(--red)' };
  el.innerHTML = recent.map(o => `
    <li class="activity-item">
      <div class="activity-dot" style="background:${colors[o.statut]||'var(--orange)'}"></div>
      <div style="flex:1">
        <div class="activity-text">
          <strong>${o.client?.name || '—'}</strong> — ${o.total.toLocaleString()} DH
          <span style="color:var(--text3)"> · ${o.id}</span>
        </div>
        <div class="activity-time">${formatDate(o.date)}</div>
      </div>
      <span class="badge badge-${o.statut.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')||'nouveau'}">${o.statut}</span>
    </li>
  `).join('');
}

// ── Orders table ───────────────────────────────────────
function filterOrders(val, el) {
  currentFilter = val;
  currentPage = 1;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderOrdersTable();
}

function renderOrdersTable() {
  const q = (document.getElementById('orderSearch')?.value || '').toLowerCase();
  let list = currentFilter === 'all' ? [...allOrders] : allOrders.filter(o => o.statut === currentFilter);
  if (q) list = list.filter(o =>
    o.id.toLowerCase().includes(q) ||
    (o.client?.name||'').toLowerCase().includes(q) ||
    (o.client?.phone||'').toLowerCase().includes(q)
  );

  filteredOrd = list;
  const total = list.length;
  const pages = Math.ceil(total / PER_PAGE) || 1;
  currentPage = Math.min(currentPage, pages);
  const start = (currentPage-1)*PER_PAGE;
  const slice = list.slice(start, start+PER_PAGE);

  const statusClass = { 'Nouveau':'badge-nouveau','Confirmé':'badge-confirme','Livré':'badge-livre','Annulé':'badge-annule' };

  const tb = document.getElementById('tbOrders');
  if (!slice.length) {
    tb.innerHTML = `<tr><td colspan="8"><div class="empty-state"><i class="fas fa-box-open"></i><h3>Aucune commande</h3><p>Passez une commande sur le site ou chargez les données démo</p><button class="topbar-btn primary" onclick="loadDemoData()"><i class="fas fa-database"></i> Charger démo</button></div></td></tr>`;
  } else {
    tb.innerHTML = slice.map(o => {
      const cl = o.client || {};
      const initials = (cl.name||'?').split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
      const prods = o.items.slice(0,2).map(it=>it.name).join(', ') + (o.items.length>2 ? ` +${o.items.length-2}` : '');
      const sc = statusClass[o.statut] || 'badge-nouveau';
      return `
      <tr>
        <td><span class="order-id">${o.id}</span></td>
        <td>
          <div class="client-cell">
            <div class="client-av">${initials}</div>
            <div>
              <div class="client-name">${cl.name||'—'}</div>
              <div class="client-phone">${cl.phone||''} ${cl.city ? '· '+cl.city : ''}</div>
            </div>
          </div>
        </td>
        <td><div class="products-cell"><div class="prod-item">${prods||'—'}</div></div></td>
        <td><span class="amount">${o.total.toLocaleString()} DH</span></td>
        <td><span style="font-size:12px;color:var(--text2)">${o.livraison||'—'}</span></td>
        <td><span class="badge ${sc}">${o.statut}</span></td>
        <td><div class="date-cell">${formatDate(o.date)}</div></td>
        <td>
          <button class="action-btn" onclick="openOrderDetail('${o.id}')" title="Voir"><i class="fas fa-eye"></i></button>
          <button class="action-btn" onclick="changeStatus('${o.id}')" title="Statut"><i class="fas fa-edit"></i></button>
        </td>
      </tr>`;
    }).join('');
  }

  // Pagination
  const pag = document.getElementById('ordersPagination');
  document.getElementById('ordersPageInfo').textContent = `${Math.min(start+1,total)}–${Math.min(start+PER_PAGE,total)} sur ${total}`;
  let pHTML = `<div class="page-info" id="ordersPageInfo">${Math.min(start+1,total)}–${Math.min(start+PER_PAGE,total)} sur ${total}</div>`;
  if (pages > 1) {
    if (currentPage > 1) pHTML += `<button class="page-btn" onclick="goPage(${currentPage-1})"><i class="fas fa-chevron-left"></i></button>`;
    for (let i=1; i<=pages; i++) {
      if (i===1 || i===pages || Math.abs(i-currentPage)<=1) {
        pHTML += `<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
      } else if (Math.abs(i-currentPage)===2) {
        pHTML += `<span style="color:var(--text3);padding:0 4px">…</span>`;
      }
    }
    if (currentPage < pages) pHTML += `<button class="page-btn" onclick="goPage(${currentPage+1})"><i class="fas fa-chevron-right"></i></button>`;
  }
  pag.innerHTML = pHTML;
}

function goPage(p) { currentPage = p; renderOrdersTable(); }

// ── Order detail modal ─────────────────────────────────
function openOrderDetail(id) {
  const o = allOrders.find(x => x.id === id);
  if (!o) return;
  const cl = o.client || {};
  const statusClass = { 'Nouveau':'badge-nouveau','Confirmé':'badge-confirme','Livré':'badge-livre','Annulé':'badge-annule' };
  document.getElementById('modalBody').innerHTML = `
    <div class="detail-row"><span class="detail-lbl">Référence</span><span class="detail-val order-id">${o.id}</span></div>
    <div class="detail-row"><span class="detail-lbl">Date</span><span class="detail-val">${formatDate(o.date)}</span></div>
    <div class="detail-row"><span class="detail-lbl">Client</span><span class="detail-val">${cl.name||'—'}</span></div>
    <div class="detail-row"><span class="detail-lbl">Téléphone</span><span class="detail-val">${cl.phone||'—'}</span></div>
    <div class="detail-row"><span class="detail-lbl">Ville</span><span class="detail-val">${cl.city||'—'}</span></div>
    <div class="detail-row"><span class="detail-lbl">Adresse</span><span class="detail-val">${cl.address||'—'}</span></div>
    <div style="margin:12px 0 6px;font-size:12px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:.5px">Produits</div>
    <div class="detail-items">
      ${o.items.length ? o.items.map(it => `
        <div class="detail-item">
          <strong>${it.name}</strong>
          <span>${it.qty} × ${it.price} DH = ${(it.subtotal || it.price*it.qty).toLocaleString()} DH</span>
        </div>`).join('') : '<div class="detail-item" style="color:var(--text3)">Aucun produit</div>'}
    </div>
    <div class="detail-row"><span class="detail-lbl">Livraison</span><span class="detail-val">${o.livraison||'—'}</span></div>
    <div class="detail-row"><span class="detail-lbl">Total</span><span class="detail-val amount">${o.total.toLocaleString()} DH</span></div>
    <div class="detail-row">
      <span class="detail-lbl">Statut</span>
      <select class="status-select" id="statusSelect_${o.id}" onchange="updateStatus('${o.id}',this.value)">
        ${['Nouveau','Confirmé','Livré','Annulé'].map(s => `<option value="${s}" ${s===o.statut?'selected':''}>${s}</option>`).join('')}
      </select>
    </div>
  `;
  document.getElementById('orderModal').classList.add('open');
}

function closeModal() {
  document.getElementById('orderModal').classList.remove('open');
}

function updateStatus(id, newStatus) {
  const o = allOrders.find(x => x.id === id);
  if (!o) return;
  o.statut = newStatus;
  // Save back
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_ORDERS) || '[]');
    const idx = stored.findIndex(x => x.id === id);
    if (idx >= 0) { stored[idx].statut = newStatus; localStorage.setItem(STORAGE_ORDERS, JSON.stringify(stored)); }
  } catch(e) {}
  showToast('Statut mis à jour : ' + newStatus, 'success');
  renderOrdersTable();
  renderActivity();
  renderCharts();
}

function changeStatus(id) { openOrderDetail(id); }

// ── Products page ──────────────────────────────────────
function renderProductsPage() {
  const q = (document.getElementById('prodSearch')?.value || '').toLowerCase();
  const grid = document.getElementById('prodsGrid');

  if (typeof PRODUCTS === 'undefined' || !Array.isArray(PRODUCTS)) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-box-open"></i><h3>Catalogue non chargé</h3><p>Ajoutez products.js dans le même dossier</p></div>`;
    return;
  }

  let prods = PRODUCTS;
  if (q) prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

  if (!prods.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h3>Aucun résultat</h3><p>Essayez un autre terme</p></div>`;
    return;
  }

  grid.innerHTML = prods.map(p => `
    <div class="prod-card">
      <div class="prod-img">
        <img src="${p.images?.[0]||''}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/18181f/ff8716?text=K'">
        <div class="prod-badge-wrap">
          <span class="prod-cat-tag">${p.category}</span>
        </div>
      </div>
      <div class="prod-body">
        <div class="prod-name">${p.name}</div>
        <div class="prod-meta">
          <div>
            <span class="prod-price">${p.price} DH</span>
            ${p.oldPrice ? `<span class="prod-old">${p.oldPrice} DH</span>` : ''}
          </div>
          <span class="prod-stock ${p.stock > 5 ? 'ok' : 'low'}">${p.stock > 5 ? 'En stock' : p.stock+' restants'}</span>
        </div>
      </div>
      <div class="prod-actions">
        <button class="prod-act-btn"><i class="fas fa-eye"></i> Voir</button>
        <button class="prod-act-btn danger"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

// ── Clients page ───────────────────────────────────────
function renderClientsPage() {
  const q = (document.getElementById('clientSearch')?.value || '').toLowerCase();
  const grid = document.getElementById('clientsGrid');

  // Build enriched client list from orders
  const map = {};
  allOrders.forEach(o => {
    const cl = o.client || {};
    const key = cl.phone || cl.name || '?';
    if (!map[key]) map[key] = { ...cl, orderCount:0, totalSpent:0, lastOrder:o.date };
    map[key].orderCount++;
    map[key].totalSpent += o.total;
    if (new Date(o.date) > new Date(map[key].lastOrder)) map[key].lastOrder = o.date;
  });

  let clients = Object.values(map).sort((a,b) => b.totalSpent - a.totalSpent);
  if (q) clients = clients.filter(c =>
    (c.name||'').toLowerCase().includes(q) ||
    (c.phone||'').toLowerCase().includes(q) ||
    (c.city||'').toLowerCase().includes(q)
  );

  if (!clients.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-users"></i><h3>Aucun client</h3><p>Les clients apparaîtront après les premières commandes</p></div>`;
    return;
  }

  grid.innerHTML = clients.map(cl => {
    const initials = (cl.name||'?').split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
    return `
    <div class="client-card">
      <div class="client-card-top">
        <div class="client-av-lg">${initials}</div>
        <div>
          <div class="client-info-name">${cl.name||'—'}</div>
          <div class="client-info-phone"><i class="fas fa-phone" style="font-size:10px"></i> ${cl.phone||'—'}</div>
          ${cl.city ? `<span class="client-info-city"><i class="fas fa-map-marker-alt" style="font-size:9px"></i> ${cl.city}</span>` : ''}
        </div>
      </div>
      <div class="client-stats">
        <div class="cstat">
          <div class="cstat-val">${cl.orderCount}</div>
          <div class="cstat-lbl">Commandes</div>
        </div>
        <div class="cstat">
          <div class="cstat-val">${(cl.totalSpent||0).toLocaleString()}</div>
          <div class="cstat-lbl">DH total</div>
        </div>
      </div>
      <div class="client-date">
        <i class="fas fa-clock" style="font-size:10px"></i>
        Dernière commande : ${formatDate(cl.lastOrder)}
      </div>
    </div>`;
  }).join('');
}

// ── Demo data ──────────────────────────────────────────
function loadDemoData() {
  const names = ['Youssef Alami','Fatima Benali','Mehdi Chraibi','Nadia Idrissi','Khalid Tazi','Souad Bennis','Hassan Moukrim','Asmaa Rachidi','Omar Zaki','Leila Hajji'];
  const cities = ['Casablanca','Rabat','Marrakech','Fès','Tanger','Agadir','Meknès','Oujda'];
  const prods = ['Pèse-Bagage LCD','Thermomètre Intelligent','Lampe LED Solaire','Montre Connectée','Ceinture Lombaire','Support Téléphone','Aspirateur Portable','Gants Résistants'];
  const prices = [80,99,150,299,120,45,199,89];
  const statuts = ['Nouveau','Confirmé','Livré','Annulé'];

  const orders = [];
  for (let i=0; i<40; i++) {
    const name = names[Math.floor(Math.random()*names.length)];
    const numItems = Math.ceil(Math.random()*3);
    const items = [];
    for (let j=0; j<numItems; j++) {
      const pi = Math.floor(Math.random()*prods.length);
      const qty = Math.ceil(Math.random()*3);
      items.push({ name:prods[pi], price:prices[pi], qty, subtotal:prices[pi]*qty });
    }
    const total = items.reduce((s,it) => s+it.subtotal, 0) + (Math.random()>0.5?30:0);
    const daysAgo = Math.floor(Math.random()*90);
    const date = new Date(Date.now() - daysAgo*86400000).toISOString();
    orders.push({
      id: 'CMD-'+Date.now().toString().slice(-5)+i,
      date,
      client:{ name, phone:'06'+Math.floor(10000000+Math.random()*89999999), city:cities[Math.floor(Math.random()*cities.length)], address: `${Math.ceil(Math.random()*200)} Rue ${Math.ceil(Math.random()*100)}` },
      items, total,
      livraison: total>=300 ? 'Gratuite' : '30 DH',
      statut: statuts[Math.floor(Math.random()*statuts.length)]
    });
  }

  localStorage.setItem(STORAGE_ORDERS, JSON.stringify(orders));
  showToast('40 commandes de démo chargées !', 'success');
  setTimeout(() => { init(); renderOrdersTable(); }, 300);
}

function resetData() {
  if (!confirm('Supprimer toutes les données de commandes ?')) return;
  [STORAGE_ORDERS, STORAGE_CLIENTS].forEach(k => localStorage.removeItem(k));
  allOrders = []; allClients = []; filteredOrd = [];
  init();
  showToast('Données réinitialisées', 'info');
}

// ── Export CSV ─────────────────────────────────────────
function exportCSV() {
  if (!allOrders.length) { showToast('Aucune donnée à exporter', 'error'); return; }
  const rows = [['Réf','Date','Client','Téléphone','Ville','Produits','Total','Livraison','Statut']];
  allOrders.forEach(o => {
    rows.push([
      o.id, formatDate(o.date),
      o.client?.name||'', o.client?.phone||'', o.client?.city||'',
      o.items.map(it=>it.name).join(' | '),
      o.total, o.livraison, o.statut
    ]);
  });
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob(['\uFEFF'+csv], {type:'text/csv;charset=utf-8'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download='klikoo_commandes_'+new Date().toISOString().split('T')[0]+'.csv';
  a.click(); URL.revokeObjectURL(url);
  showToast('Export CSV téléchargé !', 'success');
}

// ── Global search ──────────────────────────────────────
function handleGlobalSearch(q) {
  if (!q) return;
  document.querySelector('.nav-item[onclick*="orders"]').click();
  document.getElementById('orderSearch').value = q;
  renderOrdersTable();
}

// ── Helpers ────────────────────────────────────────────
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('fr-MA', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  } catch(e) { return iso || '—'; }
}

let toastTimer;
function showToast(msg, type='info') {
  const t = document.getElementById('toast');
  const icons = { success:'✅', error:'❌', info:'🔔' };
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = icons[type] || '🔔';
  t.className = 'toast show '+type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('show'); }, 3500);
}

// Close modal on overlay click
document.getElementById('orderModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── Start ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
// ── Menu mobile ──────────────────────────────────────────
function toggleMob(){
  const m = document.getElementById('mobMenu');
  if(m) m.classList.toggle('open');
}
window.addEventListener('scroll', () => {
  const h = document.getElementById('siteHeader');
  if(h) h.classList.toggle('scrolled', window.scrollY > 8);
});
document.addEventListener('click', function(e){
  const menu = document.getElementById('mobMenu');
  const btn = document.querySelector('.hbg');
  if(menu && menu.classList.contains('open') && !menu.contains(e.target) && btn && !btn.contains(e.target)){
    menu.classList.remove('open');
  }
});
