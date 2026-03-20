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
  var pg = document.getElementById('page-'+page);
  if (pg) pg.classList.add('active');

  var titles = {
    overview: 'Vue d\'ensemble',
    orders:   'Commandes',
    products: 'Produits',
    clients:  'Clients',
    ads:      'Publicités',
    music:    'Musique'
  };
  var subs = {
    overview: 'Dashboard',
    orders:   'Gestion des commandes',
    products: 'Catalogue',
    clients:  'Base de données',
    ads:      'Gestion des annonces',
    music:    'Playlist du site'
  };
  var tb = document.getElementById('topbarTitle');
  if (tb) tb.innerHTML = (titles[page]||page) + ' <span>' + (subs[page]||'') + '</span>';

  if (page === 'orders')   renderOrdersTable();
  if (page === 'products') renderProductsPage();
  if (page === 'clients')  renderClientsPage();
  if (page === 'music')    musicRender();
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
        <td><span class="badge ${sc}">${o.statut}</span></td>
        <td><div class="date-cell">${formatDate(o.date)}</div></td>
        <td>
          <button onclick="printLabel('${o.id}')" style="background:var(--pr);color:#fff;border:none;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:6px;white-space:nowrap;box-shadow:0 2px 8px rgba(255,135,22,.35)"><i class="fas fa-print"></i> Étiquette</button>
        </td>
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
    <div style="margin-top:18px">
      <button onclick="printLabel('${o.id}')" style="width:100%;background:#000;color:#fff;border:none;padding:13px;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;letter-spacing:0.5px"><i class="fas fa-tag"></i> 🖨️ Imprimer Étiquette Livraison</button>
    </div>
  `;
  document.getElementById('orderModal').classList.add('open');
}

function closeModal() {
  document.getElementById('orderModal').classList.remove('open');
}

function printLabel(id) {
  const o = allOrders.find(x => x.id === id);
  if (!o) return;
  const cl = o.client || {};
  const date = new Date(o.date);
  const dateStr = date.toLocaleDateString('fr-MA', {day:'2-digit',month:'long',year:'numeric'});
  const timeStr = date.toLocaleTimeString('fr-MA', {hour:'2-digit',minute:'2-digit'});
  const prodsList = (o.items||[]).map(it => `<tr><td style="padding:2px 6px 2px 0;font-size:10px;color:#222;vertical-align:top">• ${it.name}${it.variant?' <em style=\'color:#666\'>('+it.variant+')</em>':''}</td><td style="padding:2px 0;font-size:10px;font-weight:700;white-space:nowrap;text-align:right">x${it.qty} &nbsp; ${((it.price||0)*it.qty).toLocaleString()} DH</td></tr>`).join('');
  const totalItems = (o.items||[]).reduce((s,it)=>s+it.qty,0);
  const qrContent = `Commande: ${o.id}\nClient: ${cl.name||''}\nTél: ${cl.phone||''}\nVille: ${cl.city||''}\nAdresse: ${cl.address||''}\nMontant: ${o.total} DH\nSite: klikoo.ma`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrContent)}&ecc=H&margin=4&color=000000`;
  
  const w = window.open('', '_blank', 'width=800,height=700');
  w.document.write(`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Étiquette Livraison — ${o.id}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&family=Source+Code+Pro:wght@600&display=swap');
  @page { size: A5 landscape; margin: 0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Barlow',Arial,sans-serif; background:#e8e8e8; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; min-height:100vh; padding:10mm 0; }

  /* ── PREVIEW TOOLBAR ── */
  .toolbar { display:flex; gap:10px; margin-bottom:8mm; align-items:center; }
  .btn-print { background:#111; color:#fff; border:none; padding:10px 28px; border-radius:6px; font-size:13px; font-weight:700; cursor:pointer; font-family:Barlow,sans-serif; letter-spacing:0.5px; display:flex; align-items:center; gap:8px; }
  .btn-print:hover { background:#333; }
  .btn-close { background:#fff; color:#111; border:2px solid #111; padding:10px 20px; border-radius:6px; font-size:13px; font-weight:700; cursor:pointer; font-family:Barlow,sans-serif; }
  .btn-close:hover { background:#f0f0f0; }

  /* ── LABEL SHELL ── */
  .label {
    width:210mm; height:148mm;
    background:#fff;
    display:grid;
    grid-template-rows:auto 1fr auto;
    box-shadow:0 4px 30px rgba(0,0,0,0.2);
    position:relative;
    overflow:hidden;
  }

  /* ── HEADER ── */
  .lbl-head {
    display:grid;
    grid-template-columns:auto 1fr auto;
    align-items:center;
    padding:5mm 7mm 4mm;
    border-bottom:2.5px solid #111;
    gap:4mm;
  }
  .logo-wrap { display:flex; flex-direction:column; }
  .logo-main { font-family:'Barlow Condensed',sans-serif; font-size:26px; font-weight:900; letter-spacing:1px; color:#111; line-height:1; }
  .logo-main .logo-box { display:inline-block; background:#111; color:#fff; padding:1px 6px; margin-right:3px; border-radius:2px; }
  .logo-sub { font-size:7.5px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#888; margin-top:2px; }
  
  .head-center { display:flex; flex-direction:column; align-items:center; gap:2px; }
  .head-badge { background:#111; color:#fff; font-size:8px; font-weight:800; letter-spacing:2px; text-transform:uppercase; padding:3px 10px; border-radius:20px; }
  .head-type { font-size:8px; color:#888; letter-spacing:1px; text-transform:uppercase; }

  .order-block { text-align:right; }
  .order-num { font-family:'Source Code Pro',monospace; font-size:14px; font-weight:600; color:#111; letter-spacing:1px; }
  .order-date { font-size:8px; color:#888; margin-top:2px; }
  .order-time { font-size:8px; color:#aaa; }

  /* ── BODY ── */
  .lbl-body {
    display:grid;
    grid-template-columns:1fr 1.6px 1fr 1.6px 90px;
    height:100%;
    overflow:hidden;
  }
  .divider { background:repeating-linear-gradient(to bottom, #ccc 0, #ccc 5px, transparent 5px, transparent 10px); }

  /* SECTION SHARED */
  .section { padding:4mm 5mm; display:flex; flex-direction:column; gap:2.5mm; overflow:hidden; }
  .sec-title { font-size:7px; font-weight:800; letter-spacing:2.5px; text-transform:uppercase; color:#999; border-bottom:1px solid #eee; padding-bottom:2mm; margin-bottom:1mm; }

  /* DESTINATAIRE */
  .dest-name { font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:900; color:#111; line-height:1.1; text-transform:uppercase; }
  .dest-phone { font-size:15px; font-weight:800; color:#111; letter-spacing:0.5px; margin-top:1mm; }
  .dest-phone-2 { font-size:11px; font-weight:600; color:#555; letter-spacing:0.5px; }
  .city-tag { display:inline-flex; align-items:center; gap:4px; background:#111; color:#fff; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase; padding:2px 9px; border-radius:3px; margin-top:1.5mm; }
  .dest-address { font-size:10px; color:#444; line-height:1.55; margin-top:2mm; }
  .dest-email { font-size:9px; color:#888; margin-top:1mm; }

  /* COLIS */
  .prods-table { width:100%; border-collapse:collapse; }
  .prods-table td { padding:1.5px 4px 1.5px 0; vertical-align:top; }
  .prods-note { font-size:8px; color:#aaa; margin-top:2mm; font-style:italic; }
  .info-chip { display:flex; align-items:center; gap:5px; background:#f5f5f5; border-radius:4px; padding:2.5px 7px; }
  .chip-label { font-size:7px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#999; }
  .chip-val { font-size:10px; font-weight:700; color:#111; }

  /* COD + QR */
  .qr-col { display:flex; flex-direction:column; align-items:center; justify-content:space-between; padding:4mm 4mm; background:#f9f9f9; }
  .cod-box { border:2.5px solid #111; border-radius:5px; padding:3mm 3mm; text-align:center; width:100%; }
  .cod-label { font-size:7px; font-weight:800; text-transform:uppercase; letter-spacing:1.5px; color:#555; }
  .cod-amount { font-family:'Barlow Condensed',sans-serif; font-size:24px; font-weight:900; color:#111; line-height:1.1; }
  .cod-currency { font-size:13px; font-weight:700; }
  .cod-note { font-size:7px; color:#999; margin-top:1px; }
  .qr-img { width:90px; height:90px; border-radius:4px; }
  .qr-label { font-size:6.5px; color:#bbb; letter-spacing:1px; text-transform:uppercase; margin-top:1mm; text-align:center; }

  /* ── FOOTER ── */
  .lbl-foot {
    border-top:2.5px solid #111;
    background:#111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:2.5mm 7mm;
  }
  .foot-left { display:flex; flex-direction:column; gap:1px; }
  .foot-site { font-size:10px; font-weight:800; color:#fff; letter-spacing:1px; }
  .foot-tagline { font-size:7px; color:#888; letter-spacing:1.5px; text-transform:uppercase; }
  .foot-center { font-size:7.5px; color:#666; text-align:center; letter-spacing:0.5px; }
  .barcode { display:flex; align-items:flex-end; gap:1.5px; height:8mm; }
  .barcode span { background:#fff; display:inline-block; }

  @media screen and (max-width: 700px) {
    body { padding: 0; background: #f0f0f0; }

    /* ── Toolbar ── */
    .toolbar {
      position: sticky; top: 0; z-index: 100;
      display: flex; gap: 8px;
      background: #1a1a1a; padding: 10px 14px;
      width: 100%; margin-bottom: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.4);
    }
    .btn-print {
      flex: 1; justify-content: center;
      background: #ff8716; border-radius: 8px;
      padding: 12px 10px; font-size: 13px;
    }
    .btn-close {
      flex: 1; justify-content: center; text-align: center;
      background: #333; color: #fff; border-color: #555;
      border-radius: 8px; padding: 12px 10px; font-size: 13px;
    }
    .toolbar span { display: none; }

    /* ── Étiquette : layout vertical sur mobile ── */
    .label-scaler { width: 100%; padding: 0 12px 24px; }
    .label {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }

    /* Header */
    .lbl-head {
      padding: 14px 16px 12px;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .head-center { display: none; }
    .logo-main { font-size: 18px; }
    .order-num { font-size: 11px; letter-spacing: 0; }

    /* Body : colonnes → lignes */
    .lbl-body {
      display: flex;
      flex-direction: column;
      height: auto;
    }
    .divider { display: none; }
    .section {
      padding: 14px 16px;
      border-bottom: 1px solid #eee;
      gap: 6px;
    }
    .dest-name { font-size: 20px; }
    .dest-phone { font-size: 16px; }
    .city-tag { font-size: 11px; }
    .dest-address { font-size: 11px; }
    .info-chip { padding: 6px 10px; }
    .chip-label { font-size: 9px; }
    .chip-val { font-size: 12px; }

    /* COD + QR : côte à côte sur mobile */
    .qr-col {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 16px;
      background: #f9f9f9;
      border-top: 1px solid #eee;
      gap: 12px;
    }
    .cod-box { width: auto; padding: 12px 16px; }
    .cod-amount { font-size: 26px; }
    .qr-img { width: 100px; height: 100px; }

    /* Footer */
    .lbl-foot { padding: 10px 16px; flex-wrap: wrap; gap: 6px; }
    .foot-center { display: none; }
    .barcode span { background: #fff; }
  }

  @media print {
    body { background:#fff; padding:0; }
    .toolbar { display:none; }
    .label { box-shadow:none; width:210mm; height:148mm; }
    * { -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  }
</style>
</head>
<body>
<div class="toolbar no-print">
  <button class="btn-print" onclick="window.print()">🖨️ &nbsp; Imprimer l'étiquette</button>
  <button class="btn-close" onclick="window.close()">✕ Fermer</button>
  <span style="font-size:11px;color:#888;font-family:Barlow,sans-serif">Format A5 Paysage — Prêt à imprimer</span>
</div>

<div class="label-scaler">
<div class="label">
  <!-- ══ HEADER ══ -->
  <div class="lbl-head">
    <div class="logo-wrap">
      <div class="logo-main"><span class="logo-box">K</span>KLIKOO</div>
      <div class="logo-sub">E-Commerce · Maroc</div>
    </div>
    <div class="head-center">
      <div class="head-badge">📦 BON DE LIVRAISON</div>
    </div>
    <div class="order-block">
      <div class="order-num">#${o.id}</div>
      <div class="order-date">${dateStr}</div>
      <div class="order-time">${timeStr}</div>
    </div>
  </div>

  <!-- ══ BODY ══ -->
  <div class="lbl-body">

    <!-- DESTINATAIRE -->
    <div class="section">
      <div class="sec-title">📍 Destinataire</div>
      <div class="dest-name">${cl.name || '—'}</div>
      <div class="dest-phone">${cl.phone || '—'}</div>
      ${cl.phone2 ? `<div class="dest-phone-2">📞 ${cl.phone2}</div>` : ''}
      ${cl.city ? `<div><span class="city-tag">📌 ${cl.city}</span></div>` : ''}
      ${cl.address ? `<div class="dest-address">🏠 ${cl.address}</div>` : ''}
      ${cl.email ? `<div class="dest-email">✉️ ${cl.email}</div>` : ''}
    </div>

    <div class="divider"></div>

    <!-- DETAILS COLIS -->
    <div class="section">
      <div class="sec-title">🛍️ Détails de la commande</div>
      <table class="prods-table">${prodsList || '<tr><td style="font-size:10px;color:#999">—</td></tr>'}</table>
      <div style="margin-top:auto;display:flex;flex-direction:column;gap:2mm;">
        <div class="info-chip">
          <span class="chip-label">Articles</span>
          <span class="chip-val">${totalItems} article${totalItems>1?'s':''}</span>
        </div>
        <div class="info-chip">
          <span class="chip-label">Livraison</span>
          <span class="chip-val">${o.livraison || 'Standard'}</span>
        </div>
        <div class="info-chip">
          <span class="chip-label">Statut</span>
          <span class="chip-val">${o.statut || '—'}</span>
        </div>
        <div class="info-chip">
          <span class="chip-label">Paiement</span>
          <span class="chip-val">${o.paiement || 'Cash à la livraison'}</span>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- COD + QR -->
    <div class="qr-col">
      <div class="cod-box">
        <div class="cod-label">À Encaisser</div>
        <div class="cod-amount">${o.total.toLocaleString()} <span class="cod-currency">DH</span></div>
        <div class="cod-note">Cash à la livraison</div>
      </div>
      <img class="qr-img" src="${qrUrl}" alt="QR Code" />
      <div class="qr-label">Scanner pour détails</div>
    </div>

  </div>

  <!-- ══ FOOTER ══ -->
  <div class="lbl-foot">
    <div class="foot-left">
      <div class="foot-site">www.klikoo.ma</div>
      <div class="foot-tagline">Shopping Facile · Livraison Rapide</div>
    </div>
    <div class="foot-center">
      Merci pour votre confiance 🤝<br>
      <span style="font-size:6.5px">Commande traitée le ${dateStr} à ${timeStr}</span>
    </div>
    <div class="barcode">
      ${Array.from({length:36},(_,i)=>{const h=[5,8,4,9,6,10,4,7,5,9,3,8,10,5,7,9,4,8,5,10,6,4,9,5,8,10,6,7,4,9,5,8,6,10,7,5][i]||6; const w=[2,1,3,1,2,1,2,3,1,2,1,3,2,1,2,1,3,1,2,2,1,3,1,2,1,2,3,1,2,1,3,2,1,2,1,3][i]||2; return `<span style="height:${h}mm;width:${w}px"></span>`;}).join('')}
    </div>
  </div>
</div>
</div>

</body></html>`);
  w.document.close();
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
// ══════════════════════════════════════════════════════════════
//  SECTION MUSIQUE
// ══════════════════════════════════════════════════════════════
const MUSIC_KEY = 'klikoo_music';

function musicLoad() {
  try { return JSON.parse(localStorage.getItem(MUSIC_KEY) || '[]'); }
  catch(e) { return []; }
}

function musicSave(tracks) {
  localStorage.setItem(MUSIC_KEY, JSON.stringify(tracks));
  // Mettre à jour badge nav
  const badge = document.getElementById('navBadgeMusic');
  if (badge) badge.textContent = tracks.length;
}

function musicRender() {
  var tracks = musicLoad();
  var list    = document.getElementById('musicList');
  var msg     = document.getElementById('musicExportMsg');
  if (!list) return;

  var badge = document.getElementById('navBadgeMusic');
  if (badge) badge.textContent = tracks.length;

  if (!tracks.length) {
    list.innerHTML = '<div class="music-empty"><i class="fas fa-music" style="font-size:40px;color:#ddd;display:block;margin-bottom:12px"></i><p>Aucune chanson dans la playlist</p><p style="font-size:12px;color:#aaa">Cliquez sur \"Ajouter une chanson\" pour commencer</p></div>';
    if (msg) msg.innerHTML = 'Ajoutez des chansons puis exportez <strong>music.js</strong>';
    return;
  }

  if (msg) msg.innerHTML = '<strong>' + tracks.length + ' chanson' + (tracks.length > 1 ? 's' : '') + '</strong> dans la playlist — téléchargez <strong>music.js</strong> pour mettre à jour le site';

  var html = '';
  for (var i = 0; i < tracks.length; i++) {
    var t = tracks[i];
    html += '<div class="music-track-row" id="mtrack-' + i + '">';
    html += '<div class="music-track-num">' + (i + 1) + '</div>';
    html += '<button class="music-track-play" data-idx="' + i + '" onclick="musicPreviewByIdx(' + i + ')" title="Ecouter"><i class="fas fa-play"></i></button>';
    html += '<div class="music-track-info">';
    html += '<div class="music-track-title">' + musicEsc(t.title) + '</div>';
    if (t.artist) html += '<div class="music-track-artist">' + musicEsc(t.artist) + '</div>';
    html += '<div class="music-track-url">' + musicEsc(t.url) + '</div>';
    html += '</div>';
    html += '<div class="music-track-actions">';
    if (i > 0)                  html += '<button class="music-track-btn up"   onclick="musicMoveUp('   + i + ')" title="Monter"><i class="fas fa-chevron-up"></i></button>';
    if (i < tracks.length - 1) html += '<button class="music-track-btn down" onclick="musicMoveDown(' + i + ')" title="Descendre"><i class="fas fa-chevron-down"></i></button>';
    html += '<button class="music-track-btn" onclick="musicDelete(' + i + ')" title="Supprimer"><i class="fas fa-trash"></i></button>';
    html += '</div>';
    html += '</div>';
  }
  list.innerHTML = html;
}


function musicPreviewByIdx(idx) {
  var tracks = musicLoad();
  var t = tracks[idx];
  if (!t) return;
  var all = document.querySelectorAll('audio');
  all.forEach(function(a) { a.pause(); });
  var tmp = new Audio(t.url);
  tmp.play().catch(function() { alert('Impossible de lire ce fichier.'); });
}

function musicEsc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function musicShowAddForm() {
  var f = document.getElementById('musicAddForm');
  if (f) {
    f.style.display = 'block';
    f.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(function() {
      var inp = document.getElementById('musicTitle');
      if (inp) inp.focus();
    }, 200);
  }
}

function musicHideAddForm() {
  const f = document.getElementById('musicAddForm');
  if (f) f.style.display = 'none';
  // Arrêter aperçu
  const audio = document.getElementById('musicPreviewAudio');
  if (audio) { audio.pause(); audio.src = ''; }
  document.getElementById('musicPreview').style.display = 'none';
  document.getElementById('musicTitle').value  = '';
  document.getElementById('musicArtist').value = '';
  document.getElementById('musicUrl').value    = '';
}

function musicAddTrack() {
  const title  = document.getElementById('musicTitle').value.trim();
  const artist = document.getElementById('musicArtist').value.trim();
  const url    = document.getElementById('musicUrl').value.trim();

  if (!title) { alert('Veuillez entrer un titre'); return; }
  if (!url)   { alert('Veuillez entrer l\'URL du fichier audio'); return; }

  const tracks = musicLoad();
  tracks.push({ title: title, artist: artist, url: url, addedAt: new Date().toISOString() });
  musicSave(tracks);
  musicRender();
  musicHideAddForm();
}

function musicDelete(idx) {
  if (!confirm('Supprimer cette chanson ?')) return;
  const tracks = musicLoad();
  tracks.splice(idx, 1);
  musicSave(tracks);
  musicRender();
}

function musicMoveUp(idx) {
  const tracks = musicLoad();
  if (idx === 0) return;
  [tracks[idx - 1], tracks[idx]] = [tracks[idx], tracks[idx - 1]];
  musicSave(tracks);
  musicRender();
}

function musicMoveDown(idx) {
  const tracks = musicLoad();
  if (idx >= tracks.length - 1) return;
  [tracks[idx], tracks[idx + 1]] = [tracks[idx + 1], tracks[idx]];
  musicSave(tracks);
  musicRender();
}

// Aperçu audio depuis le formulaire
document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('musicUrl');
  if (urlInput) {
    urlInput.addEventListener('input', function() {
      const url = this.value.trim();
      const prev = document.getElementById('musicPreview');
      const audio = document.getElementById('musicPreviewAudio');
      if (url && /\.(mp3|m4a|aac|ogg|wav|flac|opus|webm)$/i.test(url)) {
        audio.src = url;
        prev.style.display = 'flex';
        // Auto-remplir titre depuis l'URL
        const titleInput = document.getElementById('musicTitle');
        if (!titleInput.value) {
          const fileName = url.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
          titleInput.value = fileName.charAt(0).toUpperCase() + fileName.slice(1);
        }
      } else {
        prev.style.display = 'none';
      }
    });
  }
  musicRender();
});

function musicPreviewTrack(url) {
  // Arrêter tout audio en cours
  const allAudio = document.querySelectorAll('audio');
  allAudio.forEach(a => { a.pause(); });
  // Créer un audio temporaire
  const tmp = new Audio(url);
  tmp.play().catch(() => alert('Impossible de lire ce fichier depuis le dashboard.'));
}

// ── Exporter music.js ─────────────────────────────────────────
function musicExportJS() {
  var tracks = musicLoad();
  if (!tracks.length) { alert('Ajoutez au moins une chanson avant d\'exporter !'); return; }

  // Construire le contenu de music.js ligne par ligne
  var lines = [];
  lines.push('// ============================================================');
  lines.push('//  KLIKOO \u2014 music.js  (g\u00e9n\u00e9r\u00e9 depuis le Dashboard ' + new Date().toLocaleDateString('fr-FR') + ')');
  lines.push('// ============================================================');
  lines.push("'use strict';");
  lines.push('');
  lines.push('var MP_PLAYLIST = [');
  tracks.forEach(function(t) {
    var title  = (t.title  || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    var artist = (t.artist || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    var url    = (t.url    || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    lines.push("  { title: '" + title + "', artist: '" + artist + "', file: '" + url + "' },");
  });
  lines.push('];');
  
  lines.push('');
  lines.push('var mpIdx=0,mpPlaying=false,mpMuted=false,mpVolume=75,mpShuffle=false,mpRepeat=false,mpHistory=[];');
  lines.push('var mpAudio=document.getElementById("mpAudio");');
  lines.push('');
  lines.push('function mpInit(){');
  lines.push('  mpRenderList();');
  lines.push('  if(MP_PLAYLIST.length){ mpLoadTrack(0,false); }');
  lines.push('  mpAudio.volume=mpVolume/100;');
  lines.push('}');


  lines.push('');
  lines.push('function mpLoadTrack(idx,autoplay){');
  lines.push('  if(!MP_PLAYLIST.length)return;');
  lines.push('  mpIdx=((idx%MP_PLAYLIST.length)+MP_PLAYLIST.length)%MP_PLAYLIST.length;');
  lines.push('  var t=MP_PLAYLIST[mpIdx];');
  lines.push('  document.getElementById("mpTitle").textContent=t.title;');
  lines.push('  document.getElementById("mpArtist").textContent=t.artist||"\uD83C\uDFB5 KLIKOO Music";');
  lines.push('  mpAudio.src=t.file;');
  lines.push('  mpAudio.load();');
  lines.push('  document.querySelectorAll(".mp-track").forEach(function(el,i){ el.classList.toggle("active",i===mpIdx); });');
  lines.push('  if(autoplay)mpPlay(); else mpPauseUI();');
  lines.push('}');


  lines.push('');
  lines.push('function mpPlay(){');
  lines.push('  mpAudio.play().then(function(){');
  lines.push('    mpPlaying=true;');
  lines.push('    document.getElementById("mpPlayIcon").className="fas fa-pause";');
  lines.push('    document.getElementById("mpWaves").classList.add("playing");');
  lines.push('    document.getElementById("mpPlayBtn").classList.add("playing");');
  lines.push('  }).catch(function(){ mpPlaying=false; });');
  lines.push('}');


  lines.push('');
  lines.push('function mpPauseUI(){');
  lines.push('  mpAudio.pause();');
  lines.push('  mpPlaying=false;');
  lines.push('  document.getElementById("mpPlayIcon").className="fas fa-play";');
  lines.push('  document.getElementById("mpWaves").classList.remove("playing");');
  lines.push('  document.getElementById("mpPlayBtn").classList.remove("playing");');
  lines.push('}');


  lines.push('');
  lines.push('function mpToggle(){ if(!MP_PLAYLIST.length)return; mpPlaying?mpPauseUI():mpPlay(); }');
  lines.push('');


  lines.push('function mpNext(){');
  lines.push('  if(!MP_PLAYLIST.length)return;');
  lines.push('  mpShuffle ? mpLoadTrack(mpShuffleNext(),true) : mpLoadTrack(mpIdx+1,mpPlaying);');
  lines.push('}');


  lines.push('');
  lines.push('function mpPrev(){');
  lines.push('  if(!MP_PLAYLIST.length)return;');
  lines.push('  mpAudio.currentTime>3 ? (mpAudio.currentTime=0) : mpLoadTrack(mpIdx-1,mpPlaying);');
  lines.push('}');


  lines.push('');
  lines.push('function mpShuffleNext(){');
  lines.push('  if(mpHistory.length>=MP_PLAYLIST.length)mpHistory=[];');
  lines.push('  var n;');
  lines.push('  do{ n=Math.floor(Math.random()*MP_PLAYLIST.length); }');
  lines.push('  while(mpHistory.includes(n)&&MP_PLAYLIST.length>1);');
  lines.push('  mpHistory.push(n); return n;');
  lines.push('}');


  lines.push('');
  lines.push('mpAudio.addEventListener("ended",function(){');
  lines.push('  if(mpRepeat==="one"){ mpAudio.currentTime=0; mpPlay(); }');
  lines.push('  else if(mpRepeat==="all"||mpIdx<MP_PLAYLIST.length-1){ mpNext(); }');
  lines.push('  else{ mpPauseUI(); }');
  lines.push('});');


  lines.push('');
  lines.push('mpAudio.addEventListener("timeupdate",function(){');
  lines.push('  if(!mpAudio.duration)return;');
  lines.push('  var p=(mpAudio.currentTime/mpAudio.duration)*100;');
  lines.push('  document.getElementById("mpProg").value=p;');
  lines.push('  document.getElementById("mpCurTime").textContent=mpFmt(mpAudio.currentTime);');
  lines.push('  document.getElementById("mpDurTime").textContent=mpFmt(mpAudio.duration);');
  lines.push('});');


  lines.push('');
  lines.push('mpAudio.addEventListener("loadedmetadata",function(){');
  lines.push('  document.getElementById("mpDurTime").textContent=mpFmt(mpAudio.duration);');
  lines.push('});');


  lines.push('');
  lines.push('function mpSeek(v){ if(mpAudio.duration)mpAudio.currentTime=(v/100)*mpAudio.duration; }');
  lines.push('');
  lines.push('function mpFmt(s){');
  lines.push('  if(!s||isNaN(s))return"0:00";');
  lines.push('  var m=Math.floor(s/60),sec=Math.floor(s%60).toString().padStart(2,"0");');
  lines.push('  return m+":"+sec;');
  lines.push('}');


  lines.push('');
  lines.push('function mpSetVol(v){ mpVolume=parseInt(v); mpAudio.volume=mpVolume/100; mpMuted=mpVolume===0; mpAudio.muted=mpMuted; mpUpdateVolIcon(); }');
  lines.push('function mpMute(){ mpMuted=!mpMuted; mpAudio.muted=mpMuted; document.getElementById("mpVol").value=mpMuted?0:mpVolume; mpUpdateVolIcon(); }');
  lines.push('function mpUpdateVolIcon(){');
  lines.push('  var ic=document.getElementById("mpVolIcon");');
  lines.push('  if(mpMuted||mpVolume===0){ ic.className="fas fa-volume-xmark"; ic.style.color="#e06500"; }');
  lines.push('  else if(mpVolume<40){ ic.className="fas fa-volume-low"; ic.style.color=""; }');
  lines.push('  else{ ic.className="fas fa-volume-high"; ic.style.color=""; }');
  lines.push('}');


  lines.push('');
  lines.push('function mpToggleShuffle(){ mpShuffle=!mpShuffle; mpHistory=[]; document.getElementById("mpShuffleBtn").classList.toggle("active",mpShuffle); }');
  lines.push('');
  lines.push('function mpToggleRepeat(){');
  lines.push('  var modes=[false,"all","one"];');
  lines.push('  mpRepeat=modes[(modes.indexOf(mpRepeat)+1)%modes.length];');
  lines.push('  var btn=document.getElementById("mpRepeatBtn");');
  lines.push('  btn.classList.toggle("active",mpRepeat!==false);');
  lines.push('  btn.querySelector("i").className=mpRepeat==="one"?"fas fa-1":"fas fa-repeat";');
  lines.push('}');


  lines.push('');
  lines.push('function mpToggleList(){');
  lines.push('  var dd=document.getElementById("mpDropdown"),arrow=document.getElementById("mpArrow");');
  lines.push('  var open=dd.classList.toggle("open");');
  lines.push('  arrow.style.transform=open?"rotate(180deg)":"";');
  lines.push('  if(open){');
  lines.push('    setTimeout(function(){');
  lines.push('      document.addEventListener("click",function c(e){');
  lines.push('        if(!document.getElementById("mpBar").contains(e.target)){');
  lines.push('          dd.classList.remove("open"); arrow.style.transform="";');
  lines.push('          document.removeEventListener("click",c);');
  lines.push('        }');
  lines.push('      });');
  lines.push('    },50);');
  lines.push('  }');
  lines.push('}');


  lines.push('');
  lines.push('function mpRenderList(){');
  lines.push('  var list=document.getElementById("mpList"),empty=document.getElementById("mpEmpty"),count=document.getElementById("mpCount");');
  lines.push('  if(!MP_PLAYLIST.length){ if(list)list.style.display="none"; if(empty)empty.style.display="block"; if(count)count.textContent=""; return; }');
  lines.push('  if(empty)empty.style.display="none";');
  lines.push('  if(list)list.style.display="block";');
  lines.push('  if(count)count.textContent=MP_PLAYLIST.length+" piste"+(MP_PLAYLIST.length>1?"s":"");');
  lines.push('  if(list)list.innerHTML=MP_PLAYLIST.map(function(t,i){');
  lines.push('    return "<div class=\\"mp-track"+(i===mpIdx?" active":"")+"\\" onclick=\\"mpLoadTrack("+i+",true)\\">"');
  lines.push('      +"<div class=\\"mp-track-num\\">"+(i+1)+"</div>"');
  lines.push('      +"<div class=\\"mp-track-info\\"><span class=\\"mp-track-title\\">"+t.title+"</span>"');
  lines.push('      +(t.artist?"<span class=\\"mp-track-artist\\">"+t.artist+"</span>":"")');
  lines.push('      +"</div></div>";');
  lines.push('  }).join("");');
  lines.push('}')


  lines.push('');
  lines.push('mpAudio.addEventListener("error",function(){ document.getElementById("mpArtist").textContent="\u26A0\uFE0F Fichier introuvable"; mpPauseUI(); });');
  lines.push('mpAudio.addEventListener("waiting",function(){ document.getElementById("mpPlayIcon").className="fas fa-spinner fa-spin"; });');
  lines.push('mpAudio.addEventListener("canplay",function(){ if(mpPlaying)document.getElementById("mpPlayIcon").className="fas fa-pause"; });');
  lines.push('');


  lines.push('document.addEventListener("DOMContentLoaded",mpInit);');


  var content = lines.join('\n');

  // Télécharger
  var blob = new Blob([content], { type: 'application/javascript' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'music.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}