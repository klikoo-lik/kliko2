// KLIKO-QRCODES — scripts

'use strict';

// ── CONFIG QR ──
const QR_SIZE = 200;
const QR_STYLE = {
  width: QR_SIZE,
  height: QR_SIZE,
  colorDark: "#0f0f12",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
};

// ── DONNÉES QR ──
const qrData = {
  website:   document.getElementById('siteUrl').value || 'https://www.kliko.ma',
  whatsapp:  'https://wa.me/212774011555',
  phone:     'tel:+212774011555',
  email:     'mailto:contact@kliko.ma',
  instagram: 'https://instagram.com/kliko.store',
  facebook:  'https://facebook.com/kliko.store'
};

// ── GÉNÉRER TOUS LES QR ──
function generateAll() {
  Object.entries(qrData).forEach(([key, url]) => {
    const el = document.getElementById('qr-' + key);
    if (!el) return;
    el.innerHTML = '';
    new QRCode(el, { text: url, ...QR_STYLE });
  });
}

// ── METTRE À JOUR QR SITE ──
function updateSiteQR() {
  const url = document.getElementById('siteUrl').value.trim();
  if (!url) { showToast('⚠️ Entrez une URL valide'); return; }
  qrData.website = url;
  document.getElementById('url-website').textContent = url;
  const el = document.getElementById('qr-website');
  el.innerHTML = '';
  new QRCode(el, { text: url, ...QR_STYLE });
  showToast('✅ QR code mis à jour !');
}

// ── TÉLÉCHARGER QR ──
function downloadQR(divId, filename) {
  const div = document.getElementById(divId);
  const canvas = div.querySelector('canvas');
  const img = div.querySelector('img');

  let src = null;

  if (canvas) {
    // Crée un canvas avec fond blanc + QR agrandi
    const c2 = document.createElement('canvas');
    const pad = 24;
    c2.width = canvas.width + pad * 2;
    c2.height = canvas.height + pad * 2;
    const ctx = c2.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, c2.width, c2.height);
    ctx.drawImage(canvas, pad, pad);
    src = c2.toDataURL('image/png');
  } else if (img) {
    src = img.src;
  }

  if (!src) { showToast('⚠️ Erreur lors du téléchargement'); return; }

  const a = document.createElement('a');
  a.href = src;
  a.download = filename + '-qrcode.png';
  a.click();
  showToast('✅ QR code téléchargé !');
}

// ── COPIER URL ──
function copyUrl(elId) {
  const txt = document.getElementById(elId).textContent;
  copyText(txt);
}
function copyText(txt) {
  navigator.clipboard.writeText(txt).then(() => showToast('✅ Copié dans le presse-papier !'))
    .catch(() => {
      const ta = document.createElement('textarea');
      ta.value = txt; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✅ Copié !');
    });
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── INIT ──
window.addEventListener('DOMContentLoaded', generateAll);
document.getElementById('siteUrl').addEventListener('keydown', e => {
  if (e.key === 'Enter') updateSiteQR();
});