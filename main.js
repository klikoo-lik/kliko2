// ============================================================
//  KLIKOO STORE — main.js
//  Logique principale : panier, commande, recherche, UI
//  Dépendances : products.js (doit être chargé avant)
// ============================================================

'use strict';

// ── Clés localStorage ────────────────────────────────────────
const STORAGE_CART     = 'klikoo_cart';
const STORAGE_WISHLIST = 'klikoo_wish';
const STORAGE_ORDERS   = 'klikoo_orders';
const STORAGE_CLIENTS  = 'klikoo_clients';
const STORAGE_SESSION  = 'klikoo_session';

// ── Easter egg : 5 clics → admin login ───────────────────────
(function () {
  var clicks = 0, timer = null;
  var el = document.getElementById('klikoo-admin-trigger');
  if (!el) return;
  el.addEventListener('click', function () {
    clicks++;
    clearTimeout(timer);
    timer = setTimeout(function () { clicks = 0; }, 2000);
    if (clicks >= 5) {
      clicks = 0;
      window.location.href = 'login-admin.html';
    }
  });
})();

// ── App code ─────────────────────────────────────────────────
let cart=JSON.parse(localStorage.getItem('klikoo_cart')||'[]');
let wishlist=JSON.parse(localStorage.getItem('klikoo_wish')||'[]');
let currentCat='Tous',filteredProds=[],currentUser=null;
const QR_CFG={width:140,height:140,colorDark:"#0f0f12",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H};
let qrGenerated=false;
function openQRModal(){document.getElementById('qrModal').classList.add('open');document.body.style.overflow='hidden';if(!qrGenerated){generateQRCodes();qrGenerated=true;}}
function closeQRModal(){document.getElementById('qrModal').classList.remove('open');document.body.style.overflow='';}
function generateQRCodes(){const url=document.getElementById('qrSiteUrl').value||'https://www.klikoo.ma';[{id:'qrWebsite',data:url},{id:'qrWhatsapp',data:'https://wa.me/212774011555'},{id:'qrPhone',data:'tel:+212774011555'},{id:'qrEmail',data:'mailto:contact@klikoo.ma'}].forEach(q=>{const el=document.getElementById(q.id);if(!el)return;el.innerHTML='';new QRCode(el,{text:q.data,...QR_CFG});});}
function regenerateSiteQR(){const url=document.getElementById('qrSiteUrl').value.trim();if(!url){showToast('\u26a0\ufe0f Entrez une URL valide');return;}document.getElementById('qrWebsiteUrl').textContent=url.replace(/https?:\/\//,'');const el=document.getElementById('qrWebsite');el.innerHTML='';new QRCode(el,{text:url,...QR_CFG});showToast('\u2705 QR code mis \u00e0 jour !');}
function dlQR(divId,fname){const div=document.getElementById(divId);const canvas=div.querySelector('canvas'),img=div.querySelector('img');let src=null;if(canvas){const c2=document.createElement('canvas');const p=20;c2.width=canvas.width+p*2;c2.height=canvas.height+p*2;const ctx=c2.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c2.width,c2.height);ctx.drawImage(canvas,p,p);src=c2.toDataURL('image/png');}else if(img){src=img.src;}if(!src){showToast('\u26a0\ufe0f Erreur');return;}const a=document.createElement('a');a.href=src;a.download=fname+'-qrcode.png';a.click();showToast('\u2705 QR code t\u00e9l\u00e9charg\u00e9 !');}
function cpText(txt){navigator.clipboard.writeText(txt).then(()=>showToast('\u2705 Copi\u00e9 !')).catch(()=>{const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);showToast('\u2705 Copi\u00e9 !');});}
document.addEventListener('DOMContentLoaded',function(){const qm=document.getElementById('qrModal');if(qm)qm.addEventListener('click',function(e){if(e.target===this)closeQRModal();});});
function checkSession(){const s=localStorage.getItem('klikoo_session')||sessionStorage.getItem('klikoo_session');if(!s)return;try{currentUser=JSON.parse(s);document.getElementById('authButtons').style.display='none';document.getElementById('userMenu').style.display='block';document.getElementById('userName').textContent=currentUser.prenom||'Compte';document.getElementById('userFullName').textContent=(currentUser.prenom||'')+' '+(currentUser.nom||'');document.getElementById('userEmail').textContent=currentUser.email||'';const mab=document.getElementById('mobAuthButtons');if(mab)mab.style.display='none';const mum=document.getElementById('mobUserMenu');if(mum)mum.style.display='block';}catch(e){localStorage.removeItem('klikoo_session');sessionStorage.removeItem('klikoo_session');}}
function toggleUserDropdown(){document.getElementById('userDropdown').classList.toggle('show');}
function logout(){if(confirm('Voulez-vous vraiment vous d\u00e9connecter ?')){localStorage.removeItem('klikoo_session');sessionStorage.removeItem('klikoo_session');showToast('\ud83d\udc4b \u00c0 bient\u00f4t !');setTimeout(()=>location.reload(),1200);}}
document.addEventListener('click',function(e){const um=document.getElementById('userMenu'),dd=document.getElementById('userDropdown');if(um&&dd&&!um.contains(e.target))dd.classList.remove('show');});
function saveCart(){localStorage.setItem('klikoo_cart',JSON.stringify(cart));updateBadges();renderProds();}
function saveWish(){localStorage.setItem('klikoo_wish',JSON.stringify(wishlist));updateBadges();}
function showToast(msg){const t=document.getElementById('toast');document.getElementById('toastMsg').textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}
function renderStars(r){return[1,2,3,4,5].map(i=>r>=i?'<i class="fas fa-star"></i>':r>=i-.5?'<i class="fas fa-star-half-stroke"></i>':'<i class="far fa-star"></i>').join('');}
function updateBadges(){const cc=cart.reduce((s,c)=>s+c.quantity,0);const cb=document.getElementById('cartBadge'),wb=document.getElementById('wishBadge');if(cb){cb.textContent=cc;cb.classList.toggle('show',cc>0);}if(wb){wb.textContent=wishlist.length;wb.classList.toggle('show',wishlist.length>0);}}
function toggleWish(id,btn){const idx=wishlist.indexOf(id);if(idx===-1){wishlist.push(id);if(btn){btn.classList.add('active');btn.querySelector('i').className='fas fa-heart';}showToast('\u2764\ufe0f Ajout\u00e9 aux favoris');}else{wishlist.splice(idx,1);if(btn){btn.classList.remove('active');btn.querySelector('i').className='far fa-heart';}showToast('\ud83d\udc94 Retir\u00e9 des favoris');}saveWish();renderProds();}
function toggleWishModal(id,btn){const idx=wishlist.indexOf(id);if(idx===-1){wishlist.push(id);btn.innerHTML='<i class="fas fa-heart"></i> Dans ma liste';showToast('\u2764\ufe0f Ajout\u00e9 aux favoris');}else{wishlist.splice(idx,1);btn.innerHTML='<i class="far fa-heart"></i> Ajouter \u00e0 ma liste';showToast('\ud83d\udc94 Retir\u00e9 des favoris');}saveWish();renderProds();}
function renderCats(){const el=document.getElementById('catsGrid');if(!el||typeof PRODUCTS==='undefined')return;el.innerHTML=CATEGORIES.map(c=>{const cnt=c.name==='Tous'?PRODUCTS.length:PRODUCTS.filter(p=>p.category===c.name).length;const sel=c.name===currentCat;return'<div class="cat-card'+(sel?' sel':'')+'" onclick="setCat(\''+c.name.replace(/\'/g,"\\'")+'\')">'+'<div class="cat-icon"><i class="'+c.icon+'" style="color:'+(sel?'#fff':'var(--pr)')+'"></i></div><h3>'+c.name+'</h3><p>'+cnt+' produit'+(cnt!==1?'s':'')+'</p></div>';}).join('');}
function setCat(c){currentCat=c;const t=document.getElementById('prodsTitle'),s=document.getElementById('prodsSubtitle');if(c==='Tous'){t.textContent='Tous nos produits';s.textContent='S\u00e9lection de produits de qualit\u00e9';}else{t.textContent=c;s.textContent='D\u00e9couvrez notre collection '+c.toLowerCase();}document.getElementById('sortSelect').value='default';filterAndRender();renderCats();document.getElementById('products').scrollIntoView({behavior:'smooth',block:'start'});}
function filterAndRender(){if(typeof PRODUCTS==='undefined')return;const srch=(document.getElementById('searchInput').value||'').toLowerCase().trim();filteredProds=PRODUCTS.filter(p=>{const mc=currentCat==='Tous'||p.category===currentCat;const ms=!srch||p.name.toLowerCase().includes(srch)||p.category.toLowerCase().includes(srch);return mc&&ms;});sortProducts(false);renderProds();}
function sortProducts(doRender=true){if(!filteredProds.length)return;const s=document.getElementById('sortSelect').value;if(s==='price-asc')filteredProds.sort((a,b)=>a.price-b.price);else if(s==='price-desc')filteredProds.sort((a,b)=>b.price-a.price);else if(s==='rating')filteredProds.sort((a,b)=>b.rating-a.rating);else if(s==='discount')filteredProds.sort((a,b)=>{const dA=a.oldPrice?((a.oldPrice-a.price)/a.oldPrice)*100:0;const dB=b.oldPrice?((b.oldPrice-b.price)/b.oldPrice)*100:0;return dB-dA;});if(doRender)renderProds();}
function liveSearch(){filterAndRender();}
function doSearch(){filterAndRender();const el=document.getElementById('products');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function renderProds(){const grid=document.getElementById('prodsGrid');if(!grid)return;const countEl=document.getElementById('prodsCount');if(countEl)countEl.textContent=filteredProds.length+' produit'+(filteredProds.length!==1?'s':'');if(!filteredProds.length){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--gr)"><i class="fas fa-box-open" style="font-size:52px;opacity:.2;display:block;margin-bottom:16px"></i><h3 style="font-size:20px;font-weight:700;color:var(--dk);margin-bottom:8px">Aucun produit trouv\u00e9</h3><p>Essayez une autre cat\u00e9gorie ou mot-cl\u00e9.</p></div>';return;}grid.innerHTML=filteredProds.map(p=>{const inCart=cart.some(c=>c.id===p.id),inWish=wishlist.includes(p.id);const stars=renderStars(p.rating);let bl='';if(p.badge==='sale'&&p.oldPrice)bl='-'+Math.round(((p.oldPrice-p.price)/p.oldPrice)*100)+'%';else if(p.badge==='new')bl='Nouveau';else if(p.badge==='hot')bl='\ud83d\udd25 Top';const bHTML=p.badge?'<span class="prod-badge badge-'+p.badge+'">'+bl+'</span>':'';return'<div class="prod-card"><div class="prod-img-wrap" onclick="openQuick('+p.id+')">'+'<img src="'+p.images[0]+'" alt="'+p.name+'" loading="lazy" onerror="this.src=\'https://via.placeholder.com/400x300/ff8716/fff?text=KLIKO\'">'+bHTML+'<button class="prod-wish'+(inWish?' active':'')+'" onclick="event.stopPropagation();toggleWish('+p.id+',this)"><i class="'+(inWish?'fas':'far')+' fa-heart"></i></button><div class="prod-quick" onclick="event.stopPropagation();openQuick('+p.id+')"><i class="fas fa-eye"></i> Aper\u00e7u rapide</div></div><div class="prod-body"><div class="prod-cat-tag">'+p.category+'</div><div class="prod-name" onclick="openQuick('+p.id+')">'+p.name+'</div><div class="prod-stars"><div class="stars">'+stars+'</div><span class="prod-reviews">('+p.reviews+')</span></div><div class="prod-stock"><i class="fas fa-circle '+(p.stock>5?'in-stock':'low-stock')+'" style="font-size:8px"></i><span class="'+(p.stock>5?'in-stock':'low-stock')+'">'+(p.stock>5?'En stock':'Plus que '+p.stock+' !')+'</span></div><div class="prod-price-row"><span class="prod-price">'+p.price+' DH</span>'+(p.oldPrice?'<span class="prod-old">'+p.oldPrice+' DH</span>':'')+'</div><button class="prod-add-btn'+(inCart?' in-cart':'')+'" onclick="addToCart('+p.id+')"><i class="fas '+(inCart?'fa-check':'fa-cart-plus')+'"></i> '+(inCart?'Ajout\u00e9':'Ajouter au panier')+'</button></div></div>';}).join('');}
function addToCart(id,qty=1){if(typeof PRODUCTS==='undefined')return;const p=PRODUCTS.find(x=>x.id===id);if(!p)return;const ex=cart.find(c=>c.id===id);if(ex)ex.quantity+=qty;else cart.push({id,quantity:qty,name:p.name,price:p.price,img:p.images[0]});saveCart();showToast('\u2705 '+p.name.substring(0,30)+'... ajout\u00e9 !');}
function removeFromCart(id){cart=cart.filter(c=>c.id!==id);saveCart();renderCartPanel();}
function changeQtyCart(id,delta){const item=cart.find(c=>c.id===id);if(!item)return;item.quantity=Math.max(1,item.quantity+delta);saveCart();renderCartPanel();}
function renderCartPanel(){const el=document.getElementById('cartItems'),footer=document.getElementById('cartFooter');if(!el||!footer)return;if(!cart.length){el.innerHTML='<div class="cart-empty"><i class="fas fa-cart-shopping"></i><h4>Votre panier est vide</h4><p>Ajoutez des produits pour commencer</p><button onclick="closeCart()" style="margin-top:20px;background:var(--pr);color:#fff;border:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:8px"><i class="fas fa-arrow-left"></i> Continuer mes achats</button></div>';footer.style.display='none';return;}const total=cart.reduce((s,c)=>s+c.price*c.quantity,0);el.innerHTML=cart.map(c=>'<div class="cart-item"><img class="cart-item-img" src="'+c.img+'" alt="'+c.name+'" onerror="this.src=\'https://via.placeholder.com/68x68/ff8716/fff?text=K\'"><div class="cart-item-info"><div class="cart-item-name">'+c.name+'</div><div class="cart-item-price">'+c.price*c.quantity+' DH</div><div class="cart-item-controls"><div class="ci-qty"><button class="ci-q-btn" onclick="changeQtyCart('+c.id+',-1)">&#8722;</button><span class="ci-q-val">'+c.quantity+'</span><button class="ci-q-btn" onclick="changeQtyCart('+c.id+',1)">&#43;</button></div><button class="ci-del" onclick="removeFromCart('+c.id+')"><i class="fas fa-trash"></i></button></div></div></div>').join('');document.getElementById('cartTotal').textContent=total+' DH';const ship=document.getElementById('cartShipping');ship.textContent=total>=300?'\ud83c\udf89 GRATUITE':'+30 DH';ship.className=total>=300?'free':'';footer.style.display='block';}
function openCart(){document.getElementById('cartOv').classList.add('open');document.body.style.overflow='hidden';renderCartPanel();}
function closeCart(){document.getElementById('cartOv').classList.remove('open');document.body.style.overflow='';}
function validateForm(){const fields=[{el:document.getElementById('clientName'),check:v=>v.trim().length>0},{el:document.getElementById('clientPhone'),check:v=>/^(\+212|0)[5-7][0-9]{8}$/.test(v.trim().replace(/\s/g,''))},{el:document.getElementById('clientCity'),check:v=>v.trim().length>0},{el:document.getElementById('clientAddress'),check:v=>v.trim().length>0}];let valid=true;fields.forEach(f=>{if(!f.check(f.el.value)){f.el.closest('.form-group').classList.add('error');valid=false;}else f.el.closest('.form-group').classList.remove('error');});return valid;}
function checkout(method='whatsapp'){if(!cart.length){showToast('⚠️ Votre panier est vide');return;}if(!validateForm()){showToast('⚠️ Remplissez tous les champs');return;}const info={name:document.getElementById('clientName').value.trim(),phone:document.getElementById('clientPhone').value.trim(),city:document.getElementById('clientCity').value.trim(),address:document.getElementById('clientAddress').value.trim()};const total=cart.reduce((s,c)=>s+c.price*c.quantity,0);const delivery=total>=300?0:30;const orderId='CMD-'+Date.now();const payLabels={whatsapp:'WhatsApp',cmi:'Carte bancaire CMI',cash:'Cash à la livraison',virement:'Virement bancaire'};const order={id:orderId,date:new Date().toISOString(),client:info,items:cart.map(c=>({id:c.id,name:c.name,price:c.price,qty:c.quantity,subtotal:c.price*c.quantity})),total:total+delivery,livraison:delivery===0?'Gratuite':'30 DH',paiement:payLabels[method]||method,statut:'Nouveau'};try{const orders=JSON.parse(localStorage.getItem('klikoo_orders')||'[]');orders.unshift(order);localStorage.setItem('klikoo_orders',JSON.stringify(orders));const clients=JSON.parse(localStorage.getItem('klikoo_clients')||'[]');clients.unshift({name:info.name,phone:info.phone,city:info.city,date:order.date,orderId:orderId});localStorage.setItem('klikoo_clients',JSON.stringify(clients));}catch(e){console.warn('[KLIKOO] Erreur localStorage:',e);}
if(method==='cmi'){closeCart();showCMIModal(order,total+delivery);return;}
if(method==='virement'){closeCart();showVirementModal(order,total+delivery);return;}
if(method==='paypal'){
  const grandTotal=total+delivery;
  const itemsDesc=cart.map(c=>c.name.substring(0,30)).join(', ');
  const descEncoded=encodeURIComponent('Commande KLIKOO #'+orderId+' - '+info.name);
  const paypalUrl='https://www.paypal.com/cgi-bin/webscr?cmd=_xclick'+
    '&business=sabri.mounir.sm%40gmail.com'+
    '&item_name='+descEncoded+
    '&item_number='+encodeURIComponent(orderId)+
    '&amount='+grandTotal+
    '&currency_code=MAD'+
    '&no_note=1&charset=utf-8'+
    '&cancel_return='+encodeURIComponent(window.location.href)+
    '&custom='+encodeURIComponent(JSON.stringify({orderId,name:info.name,phone:info.phone,city:info.city}));
  showPaypalModal(order,grandTotal,paypalUrl);
  return;
}
if(method==='cash'){
  // Message à toi (admin)
  const adminLines=['🛒 *NOUVELLE COMMANDE — KLIKOO STORE*','━━━━━━━━━━━━━━━━━━━━','👤 *CLIENT*','• Nom : '+info.name,'• Tél : '+info.phone,'• Ville : '+info.city,'• Adresse : '+info.address,'','📦 *ARTICLES COMMANDÉS*',...cart.map(c=>'▪️ '+c.name+'\n   '+c.quantity+' × '+c.price+' DH = *'+c.price*c.quantity+' DH*'),'','💰 *RÉCAPITULATIF*','Sous-total : '+total+' DH','Livraison : '+(delivery===0?'🎁 GRATUITE':'+'+delivery+' DH'),'*💵 TOTAL : '+(total+delivery)+' DH*','','💵 *Mode de paiement :* Cash à la livraison','🆔 *Réf commande :* '+orderId,'━━━━━━━━━━━━━━━━━━━━'];
  window.open('https://wa.me/212774011555?text='+encodeURIComponent(adminLines.join('\n')),'_blank');
  // Message de confirmation automatique au client
  setTimeout(function(){
    const clientPhone = info.phone.replace(/[\s\-\+]/g,'').replace(/^0/,'212');
    const clientLines=['✅ *Commande confirmée — KLIKOO Store*','','Bonjour '+info.name+' 👋','','Nous avons bien reçu votre commande et nous vous en remercions chaleureusement 🙏','','🆔 *Référence :* '+orderId,'💰 *Total :* '+(total+delivery)+' DH','📦 *Livraison :* 24 à 48h','📍 *Adresse :* '+info.city+' — '+info.address,'','Notre équipe va traiter votre commande dans les plus brefs délais.','Vous serez contacté(e) pour confirmer la livraison.','','Merci de votre confiance ! 🌟','_KLIKOO Store — Votre boutique préférée au Maroc_ 🇲🇦'];
    window.open('https://wa.me/'+clientPhone+'?text='+encodeURIComponent(clientLines.join('\n')),'_blank');
  },1500);
}
else{
  // Message à toi (admin)
  const adminLines=['🛒 *NOUVELLE COMMANDE — KLIKOO STORE*','━━━━━━━━━━━━━━━━━━━━','👤 *CLIENT*','• Nom : '+info.name,'• Tél : '+info.phone,'• Ville : '+info.city,'• Adresse : '+info.address,'','📦 *ARTICLES COMMANDÉS*',...cart.map(c=>'▪️ '+c.name+'\n   '+c.quantity+' × '+c.price+' DH = *'+c.price*c.quantity+' DH*'),'','💰 *RÉCAPITULATIF*','Sous-total : '+total+' DH','Livraison : '+(delivery===0?'🎁 GRATUITE':'+'+delivery+' DH'),'*💳 TOTAL : '+(total+delivery)+' DH*','','💳 *Mode de paiement :* WhatsApp','🆔 *Réf commande :* '+orderId,'━━━━━━━━━━━━━━━━━━━━'];
  window.open('https://wa.me/212774011555?text='+encodeURIComponent(adminLines.join('\n')),'_blank');
  // Message de confirmation automatique au client
  setTimeout(function(){
    const clientPhone = info.phone.replace(/[\s\-\+]/g,'').replace(/^0/,'212');
    const clientLines=['✅ *Commande confirmée — KLIKOO Store*','','Bonjour '+info.name+' 👋','','Nous avons bien reçu votre commande et nous vous en remercions chaleureusement 🙏','','🆔 *Référence :* '+orderId,'💰 *Total :* '+(total+delivery)+' DH','📦 *Livraison :* 24 à 48h','📍 *Adresse :* '+info.city+' — '+info.address,'','Notre équipe va traiter votre commande dans les plus brefs délais.','Vous serez contacté(e) pour confirmer la livraison.','','Merci de votre confiance ! 🌟','_KLIKOO Store — Votre boutique préférée au Maroc_ 🇲🇦'];
    window.open('https://wa.me/'+clientPhone+'?text='+encodeURIComponent(clientLines.join('\n')),'_blank');
  },1500);
}
cart=[];saveCart();['clientName','clientPhone','clientCity','clientAddress'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});closeCart();showToast('✅ Commande envoyée !');}

function showCMIModal(order,total){const m=document.createElement('div');m.id='cmiModal';m.innerHTML=`<div style="position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px"><div style="background:#0e0e1a;border:1px solid #333;border-radius:20px;padding:30px;max-width:420px;width:100%;text-align:center"><div style="width:60px;height:60px;background:linear-gradient(135deg,#1a237e,#283593);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:24px">💳</div><h3 style="color:#fff;margin-bottom:8px">Paiement par carte bancaire</h3><p style="color:#888;font-size:13px;margin-bottom:20px">Vous serez redirigé vers la plateforme sécurisée CMI</p><div style="background:#1a1a2e;border-radius:12px;padding:16px;margin-bottom:20px"><div style="display:flex;justify-content:space-between;color:#ccc;font-size:14px;margin-bottom:8px"><span>Commande</span><span style="color:#ff8716;font-weight:700">${order.id}</span></div><div style="display:flex;justify-content:space-between;color:#ccc;font-size:14px"><span>Total à payer</span><span style="color:#4caf50;font-weight:700;font-size:16px">${total} DH</span></div></div><div style="display:flex;gap:10px"><button onclick="document.getElementById('cmiModal').remove();showToast('❌ Paiement annulé')" style="flex:1;padding:13px;border:2px solid #444;border-radius:10px;background:transparent;color:#888;cursor:pointer;font-size:14px">Annuler</button><button onclick="document.getElementById('cmiModal').remove();showToast('🔄 Redirection vers CMI... (démo)')" style="flex:1;padding:13px;background:linear-gradient(135deg,#1a237e,#5c6bc0);border:none;border-radius:10px;color:#fff;cursor:pointer;font-weight:700;font-size:14px">Payer ${total} DH →</button></div><p style="color:#555;font-size:11px;margin-top:14px">🔒 Paiement 3D Secure · Visa · Mastercard</p></div></div>`;document.body.appendChild(m);}

function showPaypalModal(order,total,paypalUrl){
  const m=document.createElement('div');
  m.id='ppModal';
  m.innerHTML=`<div style="position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;border-radius:20px;padding:0;max-width:420px;width:100%;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,.4)">
      <div style="background:linear-gradient(135deg,#003087,#009cde);padding:28px 24px;text-align:center">
        <div style="font-size:48px;margin-bottom:8px">🅿️</div>
        <h3 style="color:#fff;font-size:20px;font-weight:800;margin:0">Paiement PayPal</h3>
        <p style="color:rgba(255,255,255,.7);font-size:13px;margin:6px 0 0">Paiement sécurisé SSL</p>
      </div>
      <div style="padding:24px">
        <div style="background:#f8f9fa;border-radius:12px;padding:16px;margin-bottom:18px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="color:#666;font-size:13px">Commande</span>
            <strong style="color:#1a1a2e;font-size:13px">${order.id}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="color:#666;font-size:13px">Client</span>
            <strong style="color:#1a1a2e;font-size:13px">${order.client.name}</strong>
          </div>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:10px 0">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="color:#666;font-size:14px;font-weight:600">Total à payer</span>
            <strong style="color:#003087;font-size:22px;font-weight:900">${total} MAD</strong>
          </div>
        </div>
        <p style="text-align:center;color:#888;font-size:12px;margin-bottom:16px;line-height:1.5">
          Vous serez redirigé vers PayPal pour compléter le paiement.<br>
          Carte bancaire ou compte PayPal acceptés.
        </p>
        <a href="${paypalUrl}" target="_blank" onclick="setTimeout(()=>{document.getElementById('ppModal').remove();cart=[];saveCart();['clientName','clientPhone','clientCity','clientAddress'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});closeCart();showToast('🎉 Redirection PayPal...');},500)"
          style="display:flex;align-items:center;justify-content:center;gap:12px;width:100%;padding:16px;background:linear-gradient(135deg,#003087,#009cde);border:none;border-radius:12px;color:#fff;font-size:16px;font-weight:800;text-decoration:none;box-sizing:border-box;transition:all .2s;letter-spacing:.3px">
          <i class="fab fa-paypal" style="font-size:20px"></i>
          Payer ${total} MAD sur PayPal →
        </a>
        <button onclick="document.getElementById('ppModal').remove()"
          style="display:block;width:100%;margin-top:10px;padding:13px;border:2px solid #e5e7eb;border-radius:12px;background:transparent;color:#888;cursor:pointer;font-size:14px;font-family:inherit">
          ← Revenir au panier
        </button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(m);
}
function showVirementModal(order,total){const m=document.createElement('div');m.id='virModal';m.innerHTML=`<div style="position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px"><div style="background:#0e0e1a;border:1px solid #333;border-radius:20px;padding:30px;max-width:420px;width:100%"><div style="text-align:center;margin-bottom:20px"><div style="font-size:36px;margin-bottom:8px">🏦</div><h3 style="color:#fff">Virement bancaire</h3><p style="color:#888;font-size:13px">Effectuez le virement puis envoyez le reçu</p></div><div style="background:#1a1a2e;border-radius:12px;padding:16px;margin-bottom:16px"><p style="color:#888;font-size:11px;text-transform:uppercase;margin-bottom:10px">Coordonnées bancaires</p><div style="color:#ccc;font-size:13px;line-height:1.8"><div>🏛️ <strong style="color:#fff">Attijariwafa Bank</strong></div><div>RIB: <strong style="color:#2196f3">007 780 0000123456789012</strong></div><div>Titulaire: <strong style="color:#fff">KLIKOO SARL</strong></div><hr style="border-color:#333;margin:10px 0"><div>🏛️ <strong style="color:#fff">CIH Bank</strong></div><div>RIB: <strong style="color:#2196f3">230 810 0000987654321098</strong></div><div>Titulaire: <strong style="color:#fff">KLIKOO SARL</strong></div></div></div><div style="background:#ff871620;border:1px solid #ff8716;border-radius:10px;padding:12px;margin-bottom:16px;text-align:center"><p style="color:#ff8716;font-size:13px;margin:0">Montant exact: <strong style="font-size:18px">${total} DH</strong></p><p style="color:#ff871680;font-size:11px;margin:4px 0 0">Référence: ${order.id}</p></div><div style="display:flex;gap:10px"><button onclick="document.getElementById('virModal').remove()" style="flex:1;padding:13px;border:2px solid #444;border-radius:10px;background:transparent;color:#888;cursor:pointer;font-size:14px">Fermer</button><button onclick="document.getElementById('virModal').remove();window.open('https://wa.me/212774011555?text='+encodeURIComponent('🏦 Virement effectué\\nCommande: ${order.id}\\nMontant: ${total} DH\\nNom: ${order.client.name}'),'_blank')" style="flex:1;padding:13px;background:linear-gradient(135deg,#25d366,#128c7e);border:none;border-radius:10px;color:#fff;cursor:pointer;font-weight:700;font-size:13px">📤 Envoyer reçu WA</button></div></div></div>`;document.body.appendChild(m);}
function openQuick(id){if(typeof PRODUCTS==='undefined')return;const p=PRODUCTS.find(x=>x.id===id);if(!p)return;const stars=renderStars(p.rating);const savings=p.oldPrice?p.oldPrice-p.price:0;const descHTML=Array.isArray(p.description)?'<ul class="modal-desc">'+p.description.map(d=>'<li>'+d+'</li>').join('')+'</ul>':'<p class="modal-desc">'+p.description+'</p>';document.getElementById('modalInner').innerHTML='<div class="modal-imgs"><img class="modal-main-img" id="modalMainImg" src="'+p.images[0]+'" alt="'+p.name+'" onerror="this.src=\'https://via.placeholder.com/400x400/ff8716/fff?text=KLIKO\'">'+( p.images.length>1?'<div class="modal-thumbs">'+p.images.map((img,i)=>'<img class="modal-thumb'+(i===0?' active':'')+'" src="'+img+'" onclick="switchImg(this,\''+img+'\')">').join('')+'</div>':'' )+'</div><div class="modal-info"><div class="modal-cat">'+p.category+'</div><h2 class="modal-name">'+p.name+'</h2><div class="modal-stars"><div class="stars">'+stars+'</div><span style="font-size:13px;color:var(--gr);margin-left:6px">'+p.rating+'/5 ('+p.reviews+' avis)</span></div><div class="modal-price-row"><span class="modal-price">'+p.price+' DH</span>'+(p.oldPrice?'<span class="modal-old">'+p.oldPrice+' DH</span>':'')+(savings?'<span class="modal-savings">\u00c9conomisez '+savings+' DH</span>':'')+'</div>'+descHTML+'<div class="modal-qty-row"><span class="modal-qty-label">Quantit\u00e9 :</span><div class="qty-control"><button class="qty-btn" onclick="changeModalQty(-1)">&#8722;</button><input class="qty-val" id="modalQty" type="number" value="1" min="1" max="'+p.stock+'"><button class="qty-btn" onclick="changeModalQty(1)">&#43;</button></div><span style="font-size:12px;color:'+(p.stock>5?'var(--green)':'#f59e0b')+';font-weight:700">'+(p.stock>5?'En stock':p.stock+' restants')+'</span></div><button class="modal-cart-btn" onclick="addToCart('+p.id+',+document.getElementById(\'modalQty\').value);closeModal()"><i class="fas fa-cart-plus"></i> Ajouter au panier</button><button class="modal-wish-btn" onclick="toggleWishModal('+p.id+',this)"><i class="'+(wishlist.includes(p.id)?'fas':'far')+' fa-heart"></i> '+(wishlist.includes(p.id)?'Dans ma liste':'Ajouter \u00e0 ma liste')+'</button></div>';document.getElementById('quickModal').classList.add('open');document.body.style.overflow='hidden';}
function closeModal(){document.getElementById('quickModal').classList.remove('open');document.body.style.overflow='';}
function handleModalClick(e){if(e.target.id==='quickModal')closeModal();}
function switchImg(el,src){document.getElementById('modalMainImg').src=src;document.querySelectorAll('.modal-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active');}
function changeModalQty(d){const i=document.getElementById('modalQty');i.value=Math.max(1,+i.value+d);}
function toggleMob(){document.getElementById('mobMenu').classList.toggle('open');}
function startTimer(){const end=new Date();end.setHours(23,59,59,999);function tick(){const d=end-new Date();if(d<=0)return;const h=Math.floor(d/3600000),m=Math.floor((d%3600000)/60000),s=Math.floor((d%60000)/1000);const th=document.getElementById('t-h'),tm=document.getElementById('t-m'),ts=document.getElementById('t-s');if(th)th.textContent=String(h).padStart(2,'0');if(tm)tm.textContent=String(m).padStart(2,'0');if(ts)ts.textContent=String(s).padStart(2,'0');}tick();setInterval(tick,1000);}
document.addEventListener('DOMContentLoaded',()=>{checkSession();if(typeof PRODUCTS!=='undefined'&&Array.isArray(PRODUCTS)){filteredProds=[...PRODUCTS];renderCats();filterAndRender();}else{const g=document.getElementById('prodsGrid');if(g)g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--gr)"><i class="fas fa-box-open" style="font-size:52px;opacity:.2;display:block;margin-bottom:16px"></i><p>Chargez votre fichier products.js</p></div>';renderCats();}updateBadges();startTimer();window.addEventListener('scroll',()=>{document.getElementById('siteHeader').classList.toggle('scrolled',window.scrollY>8);});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCart();closeQRModal();}});});