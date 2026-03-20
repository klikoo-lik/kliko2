// ============================================================
//  KLIKOO — ads.js  v9.0  FINAL
// ============================================================
'use strict';

const ADS_KEY = 'klikoo_ads';

// ── Pubs de démo (sidebars seulement si aucune vraie pub) ─────
const ADS_DEMO = [
  {
    id:'demo-1', status:'active', slot:'sidebar-left',
    advertiser:'KLIKOO Store', title:'Soldes\nJusqu\'à -50%',
    url:'#products', cta:'Voir les offres', image:'https://res.cloudinary.com/djagllief/image/upload/v1772366161/PUB_GAUCHE_TOP_elgr5j.jpg',
    startDate:'2020-01-01', endDate:'2099-12-31'
  },
  {
    id:'demo-2', status:'active', slot:'sidebar-right',
    advertiser:'Livraison Express', title:'Livraison\n24-48h Maroc',
    url:'#products', cta:'Commander', image:'https://res.cloudinary.com/djagllief/image/upload/v1772360662/PUB_-_TOP_umqvni.jpg',
    startDate:'2020-01-01', endDate:'2099-12-31'
  }
];

// ── Charger les pubs actives ──────────────────────────────────
function getActiveAds(slot) {
  try {
    const all = JSON.parse(localStorage.getItem(ADS_KEY) || '[]');
    const now = Date.now();
    const real = all.filter(function(ad) {
      return ad.status === 'active'
        && new Date(ad.startDate).getTime() <= now
        && new Date(ad.endDate).getTime()   >= now
        && (!slot || ad.slot === slot || (slot === 'sidebar' && (ad.slot === 'sidebar-left' || ad.slot === 'sidebar-right')));
    });
    if (real.length === 0 && (slot === 'sidebar-left' || slot === 'sidebar-right' || slot === 'sidebar')) {
      return ADS_DEMO.filter(function(d){ return d.slot === slot; });
    }
    return real;
  } catch(e) {
    return ADS_DEMO.filter(function(d){ return d.slot === slot; });
  }
}

// ── 1. BANNIÈRE TOP ───────────────────────────────────────────
function renderTopBanner() {
  var ads = getActiveAds('top-banner');
  var el  = document.getElementById('adTopBanner');
  if (!el || !ads.length) { if (el) el.style.display='none'; return; }
  var ad = ads[0];
  el.style.display = 'flex';
  el.innerHTML = '<a href="'+(ad.url||'#')+'" target="_blank" class="ad-top-inner" onclick="trackAdClick(\''+ad.id+'\')">'
    +(ad.emoji ? '<span class="ad-top-emoji">'+ad.emoji+'</span>' : '')
    +'<span class="ad-top-text">'+(ad.text||ad.title||'')+'</span>'
    +(ad.cta ? '<span class="ad-top-cta">'+ad.cta+'</span>' : '')
    +'</a>'
    +'<button class="ad-top-close" onclick="this.parentElement.style.display=\'none\'">×</button>';
}

// ── 2. POPUP ──────────────────────────────────────────────────
function renderPopup() {
  var ads = getActiveAds('popup');
  if (!ads.length) return;
  if (sessionStorage.getItem('klikoo_popup_shown')) return;
  var ad = ads[Math.floor(Math.random() * ads.length)];
  var el = document.getElementById('adPopup');
  if (!el) return;

  var imgHtml = '';
  if (ad.image) {
    imgHtml = '<div class="adp-img-wrap"><img src="'+ad.image+'" alt="'+(ad.advertiser||'')+'" class="adp-img" onerror="this.parentElement.style.display=\'none\'"></div>';
  } else {
    imgHtml = '<div class="adp-img-wrap adp-img-placeholder"><span>🎁</span></div>';
  }

  el.innerHTML =
    '<div class="adp-box">'
    +'<button class="adp-close" onclick="closePopup()" title="Fermer"><i class="fas fa-times"></i></button>'
    +'<span class="adp-badge">Offre Sponsorisée</span>'
    +imgHtml
    +'<div class="adp-body">'
    +'<div class="adp-brand">'+(ad.advertiser||'')+'</div>'
    +'<div class="adp-title">'+(ad.title||'')+'</div>'
    +(ad.description ? '<div class="adp-desc">'+(ad.description||'')+'</div>' : '')
    +(ad.url ? '<a href="'+ad.url+'" target="_blank" class="adp-btn" onclick="trackAdClick(\''+ad.id+'\')">'+( ad.cta||"Voir l'offre")+' <i class="fas fa-arrow-right"></i></a>' : '')
    +'</div>'
    +'</div>';

  setTimeout(function() {
    el.classList.add('open');
    sessionStorage.setItem('klikoo_popup_shown', '1');
  }, 2500);
}

function closePopup() {
  var el = document.getElementById('adPopup');
  if (el) el.classList.remove('open');
}

// ── 3. SIDEBARS ───────────────────────────────────────────────
function calcSidebarGeometry() {
  var hdr = document.getElementById('siteHeader');
  var annBar = document.getElementById('adTopBanner');
  var annH = (annBar && annBar.offsetHeight && annBar.style.display !== 'none') ? annBar.offsetHeight : 0;
  var hdrH = hdr ? hdr.offsetHeight : 112;
  var topPos = annH + hdrH + 6;
  var availH = window.innerHeight - topPos - 10;
  return { top: topPos, height: Math.max(availH, 160) };
}

function renderSidebars() {
  var geo = calcSidebarGeometry();

  var configs = [
    { id:'adSideLeft',  slot:'sidebar-left',  emoji:'🔥', grad:'linear-gradient(160deg,#ff8716,#c04400)' },
    { id:'adSideRight', slot:'sidebar-right', emoji:'🚀', grad:'linear-gradient(160deg,#1a56db,#0d2d7a)' }
  ];

  configs.forEach(function(cfg) {
    var el = document.getElementById(cfg.id);
    if (!el) return;
    var ads = getActiveAds(cfg.slot);
    var ad  = ads[0] || null;
    if (!ad) { el.style.display='none'; el.innerHTML=''; return; }

    el.style.display = 'flex';
    el.style.top     = '120px';
    el.style.height  = 'calc(100vh - 140px)';

    var closeBtn = '<button onclick="document.getElementById(\''+cfg.id+'\').style.display=\'none\'" '
      +'style="position:absolute;top:7px;right:7px;width:22px;height:22px;'
      +'background:rgba(0,0,0,.35);border:none;border-radius:50%;'
      +'cursor:pointer;color:#fff;font-size:12px;z-index:20;'
      +'display:flex;align-items:center;justify-content:center;line-height:1">×</button>';

    var pubLabel = '<div style="position:absolute;top:7px;left:7px;'
      +'background:rgba(0,0,0,.35);color:rgba(255,255,255,.9);'
      +'font-size:9px;font-weight:700;padding:2px 7px;border-radius:10px;'
      +'letter-spacing:.5px;text-transform:uppercase;z-index:20">Pub</div>';

    var content = '';
    if (ad.image) {
      // Image réelle centrée et couvrant toute la surface
      content = '<a href="'+(ad.url||'#')+'" target="_blank" onclick="trackAdClick(\''+ad.id+'\')" '
        +'style="display:flex;flex:1;min-height:0;text-decoration:none;overflow:hidden">'
        +'<img src="'+ad.image+'" alt="'+(ad.advertiser||'')+'" '
        +'style="width:100%;height:100%;object-fit:cover;object-position:center;display:block" '
        +'onerror="this.parentElement.style.background=\''+cfg.grad+'\'">'
        +'</a>';
    } else {
      // Design texte soigné
      content = '<a href="'+(ad.url||'#')+'" target="_blank" onclick="trackAdClick(\''+ad.id+'\')" '
        +'style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;'
        +'background:'+cfg.grad+';text-decoration:none;padding:20px 12px;gap:14px;text-align:center;min-height:0">'
        +'<div style="font-size:36px;line-height:1">'+cfg.emoji+'</div>'
        +'<div style="font-size:11px;font-weight:800;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:1px">'+(ad.advertiser||'KLIKOO')+'</div>'
        +'<div style="font-size:16px;font-weight:900;color:#fff;line-height:1.3;white-space:pre-line">'+(ad.title||'')+'</div>'
        +'<div style="background:rgba(255,255,255,.2);border:1.5px solid rgba(255,255,255,.45);'
        +'color:#fff;font-size:11px;font-weight:700;padding:7px 14px;border-radius:20px;margin-top:4px">'+(ad.cta||'Voir')+'</div>'
        +'</a>';
    }

    // Bouton spécial pour sidebar-right uniquement
    var extraBtn = '';

    el.innerHTML = '<div style="position:relative;width:100%;height:100%;overflow:hidden;'      +'border-radius:10px;box-shadow:0 6px 24px rgba(0,0,0,.18)">'      +closeBtn+pubLabel+content+extraBtn+'</div>';
  });
}

function updateSidebarPositions() {
  // Positions fixes - ne bougent plus au scroll
}

// ── 4. IN-FEED ────────────────────────────────────────────────
function renderInFeedAds() {
  var ads = getActiveAds('in-feed');
  if (!ads.length) return;
  var grille = document.getElementById('prodsGrid');
  if (!grille) return;
  var cards = grille.querySelectorAll('.prod-card');
  if (cards.length < 6) return;
  ads.slice(0, 2).forEach(function(ad, idx) {
    var insertAfter = cards[(idx + 1) * 6 - 1];
    if (!insertAfter) return;
    var adEl = document.createElement('div');
    adEl.className = 'ad-infeed-card';
    adEl.innerHTML = '<div class="ad-infeed-label">Sponsorisé</div>'
      +(ad.image ? '<div class="ad-infeed-img"><img src="'+ad.image+'" alt="'+(ad.advertiser||'')+'"></div>'
                 : '<div class="ad-infeed-noimg">⭐</div>')
      +'<div class="ad-infeed-body">'
      +'<div class="ad-infeed-brand">'+(ad.advertiser||'')+'</div>'
      +'<div class="ad-infeed-title">'+(ad.title||'')+'</div>'
      +'<a href="'+(ad.url||'#')+'" target="_blank" class="ad-infeed-btn" onclick="trackAdClick(\''+ad.id+'\')">'+( ad.cta||'Découvrir')+'</a>'
      +'</div>';
    insertAfter.insertAdjacentElement('afterend', adEl);
  });
}

// ── 5. BANNIÈRE ENTRE SECTIONS ────────────────────────────────
function renderBelowCatsBanner() {
  var ads = getActiveAds('top-banner').concat(getActiveAds('in-feed'));
  var el  = document.getElementById('adBelowCats');
  if (!el || !ads.length) { if(el) el.style.display='none'; return; }
  var ad = ads[0];
  el.style.display = 'block';
  el.innerHTML = '<div class="ad-between-inner">'
    +'<div class="ad-between-label">Sponsorisé</div>'
    +'<a href="'+(ad.url||'#')+'" target="_blank" class="ad-between-link" onclick="trackAdClick(\''+ad.id+'\')">'
    +(ad.image ? '<img src="'+ad.image+'" alt="'+(ad.advertiser||'')+'" class="ad-between-img" onerror="this.style.display=\'none\'">' : '')
    +'<div class="ad-between-content">'
    +(ad.emoji ? '<span class="ad-between-emoji">'+ad.emoji+'</span>' : '')
    +'<div><div class="ad-between-brand">'+(ad.advertiser||'')+'</div>'
    +'<div class="ad-between-title">'+(ad.title||'')+'</div>'
    +(ad.description ? '<div class="ad-between-desc">'+ad.description+'</div>' : '')
    +'</div><span class="ad-between-cta">'+(ad.cta||'Découvrir')+' →</span>'
    +'</div></a></div>';
}

// ── Track ─────────────────────────────────────────────────────
function trackAdClick(adId) {
  if (!adId || adId.startsWith('demo-')) return;
  try {
    var ads = JSON.parse(localStorage.getItem(ADS_KEY)||'[]');
    var ad  = ads.find(function(a){ return a.id === adId; });
    if (ad) { ad.clicks = (ad.clicks||0)+1; localStorage.setItem(ADS_KEY, JSON.stringify(ads)); }
  } catch(e) {}
}

// ── INIT ──────────────────────────────────────────────────────
function initAds() {
  renderTopBanner();
  renderPopup();
  renderSidebars();
  renderBelowCatsBanner();
  setTimeout(renderInFeedAds, 900);
  window.addEventListener('scroll',  updateSidebarPositions, { passive: true });
  window.addEventListener('resize',  function(){ renderSidebars(); });
}

document.addEventListener('DOMContentLoaded', initAds);