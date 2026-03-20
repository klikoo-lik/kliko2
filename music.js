// ============================================================
//  KLIKOO — music.js  v4.0  FINAL
//  ✅ URLs uniquement — géré depuis Dashboard > Musique
// ============================================================
'use strict';

// ══════════════════════════════════════════════════════════════
//  PLAYLIST — générée automatiquement par le Dashboard
//  Ne modifiez pas manuellement — utilisez Dashboard > Musique
// ══════════════════════════════════════════════════════════════
var MP_PLAYLIST = [
  // Vide par défaut — ajoutez vos chansons depuis le Dashboard
];

// ── État ──────────────────────────────────────────────────────
var mpIdx     = 0;
var mpPlaying = false;
var mpMuted   = false;
var mpVolume  = 75;
var mpShuffle = false;
var mpRepeat  = false;
var mpHistory = [];
// Guard: ce fichier ne doit être chargé que sur les pages avec #mpAudio
var mpAudio = document.getElementById('mpAudio');
if (!mpAudio) {
  // Page sans lecteur audio — ne rien initialiser
  console.info('[music.js] #mpAudio absent sur cette page — lecteur désactivé.');
} else {

// ── Init ──────────────────────────────────────────────────────
function mpInit() {
  mpRenderList();
  if (MP_PLAYLIST.length) {
    mpLoadTrack(0, false);
  } else {
    document.getElementById('mpTitle').textContent  = 'Playlist vide';
    document.getElementById('mpArtist').textContent = 'Ajoutez des chansons';
  }
  mpAudio.volume = mpVolume / 100;
}

// ── Charger une piste ─────────────────────────────────────────
function mpLoadTrack(idx, autoplay) {
  if (!MP_PLAYLIST.length) return;
  mpIdx = ((idx % MP_PLAYLIST.length) + MP_PLAYLIST.length) % MP_PLAYLIST.length;
  var t = MP_PLAYLIST[mpIdx];
  document.getElementById('mpTitle').textContent  = t.title  || 'Sans titre';
  document.getElementById('mpArtist').textContent = t.artist || '\uD83C\uDFB5 KLIKOO Music';
  mpAudio.src = t.file;
  mpAudio.load();
  document.querySelectorAll('.mp-track').forEach(function(el, i) {
    el.classList.toggle('active', i === mpIdx);
  });
  if (autoplay) mpPlay(); else mpPauseUI();
}

function mpPlay() {
  mpAudio.play().then(function() {
    mpPlaying = true;
    document.getElementById('mpPlayIcon').className = 'fas fa-pause';
    document.getElementById('mpWaves').classList.add('playing');
    document.getElementById('mpPlayBtn').classList.add('playing');
  }).catch(function() { mpPlaying = false; });
}

function mpPauseUI() {
  mpAudio.pause();
  mpPlaying = false;
  document.getElementById('mpPlayIcon').className = 'fas fa-play';
  document.getElementById('mpWaves').classList.remove('playing');
  document.getElementById('mpPlayBtn').classList.remove('playing');
}

function mpToggle() {
  if (!MP_PLAYLIST.length) return;
  mpPlaying ? mpPauseUI() : mpPlay();
}

function mpNext() {
  if (!MP_PLAYLIST.length) return;
  mpShuffle ? mpLoadTrack(mpShuffleNext(), true) : mpLoadTrack(mpIdx + 1, mpPlaying);
}

function mpPrev() {
  if (!MP_PLAYLIST.length) return;
  mpAudio.currentTime > 3 ? (mpAudio.currentTime = 0) : mpLoadTrack(mpIdx - 1, mpPlaying);
}

function mpShuffleNext() {
  if (mpHistory.length >= MP_PLAYLIST.length) mpHistory = [];
  var n;
  do { n = Math.floor(Math.random() * MP_PLAYLIST.length); }
  while (mpHistory.includes(n) && MP_PLAYLIST.length > 1);
  mpHistory.push(n);
  return n;
}

mpAudio.addEventListener('ended', function() {
  if (mpRepeat === 'one')      { mpAudio.currentTime = 0; mpPlay(); }
  else if (mpRepeat === 'all' || mpIdx < MP_PLAYLIST.length - 1) { mpNext(); }
  else { mpPauseUI(); }
});

mpAudio.addEventListener('timeupdate', function() {
  if (!mpAudio.duration) return;
  var p = (mpAudio.currentTime / mpAudio.duration) * 100;
  document.getElementById('mpProg').value = p;
  document.getElementById('mpCurTime').textContent = mpFmt(mpAudio.currentTime);
  document.getElementById('mpDurTime').textContent = mpFmt(mpAudio.duration);
});

mpAudio.addEventListener('loadedmetadata', function() {
  document.getElementById('mpDurTime').textContent = mpFmt(mpAudio.duration);
});

function mpSeek(v) {
  if (mpAudio.duration) mpAudio.currentTime = (v / 100) * mpAudio.duration;
}

function mpFmt(s) {
  if (!s || isNaN(s)) return '0:00';
  var m   = Math.floor(s / 60);
  var sec = Math.floor(s % 60).toString().padStart(2, '0');
  return m + ':' + sec;
}

function mpSetVol(v) {
  mpVolume = parseInt(v);
  mpAudio.volume = mpVolume / 100;
  mpMuted = mpVolume === 0;
  mpAudio.muted = mpMuted;
  mpUpdateVolIcon();
}

function mpMute() {
  mpMuted = !mpMuted;
  mpAudio.muted = mpMuted;
  document.getElementById('mpVol').value = mpMuted ? 0 : mpVolume;
  mpUpdateVolIcon();
}

function mpUpdateVolIcon() {
  var ic = document.getElementById('mpVolIcon');
  if (mpMuted || mpVolume === 0) { ic.className = 'fas fa-volume-xmark'; ic.style.color = '#e06500'; }
  else if (mpVolume < 40)        { ic.className = 'fas fa-volume-low';   ic.style.color = ''; }
  else                           { ic.className = 'fas fa-volume-high';  ic.style.color = ''; }
}

function mpToggleShuffle() {
  mpShuffle = !mpShuffle;
  mpHistory = [];
  document.getElementById('mpShuffleBtn').classList.toggle('active', mpShuffle);
}

function mpToggleRepeat() {
  var modes = [false, 'all', 'one'];
  mpRepeat = modes[(modes.indexOf(mpRepeat) + 1) % modes.length];
  var btn = document.getElementById('mpRepeatBtn');
  btn.classList.toggle('active', mpRepeat !== false);
  btn.querySelector('i').className = mpRepeat === 'one' ? 'fas fa-1' : 'fas fa-repeat';
}

function mpToggleList() {
  var dd    = document.getElementById('mpDropdown');
  var arrow = document.getElementById('mpArrow');
  var open  = dd.classList.toggle('open');
  arrow.style.transform = open ? 'rotate(180deg)' : '';
  if (open) {
    setTimeout(function() {
      document.addEventListener('click', function closeMPDD(e) {
        if (!document.getElementById('mpBar').contains(e.target)) {
          dd.classList.remove('open');
          arrow.style.transform = '';
          document.removeEventListener('click', closeMPDD);
        }
      });
    }, 50);
  }
}

function mpRenderList() {
  var list  = document.getElementById('mpList');
  var empty = document.getElementById('mpEmpty');
  var count = document.getElementById('mpCount');
  if (!MP_PLAYLIST.length) {
    if (list)  list.style.display  = 'none';
    if (empty) empty.style.display = 'block';
    if (count) count.textContent   = '';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (list)  list.style.display  = 'block';
  if (count) count.textContent = MP_PLAYLIST.length + ' piste' + (MP_PLAYLIST.length > 1 ? 's' : '');
  if (!list) return;
  var html = '';
  for (var i = 0; i < MP_PLAYLIST.length; i++) {
    var t   = MP_PLAYLIST[i];
    var act = i === mpIdx ? ' active' : '';
    html += '<div class="mp-track' + act + '" onclick="mpLoadTrack(' + i + ',true)">';
    html += '<div class="mp-track-num">' + (i + 1) + '</div>';
    html += '<div class="mp-track-info">';
    html += '<span class="mp-track-title">' + (t.title || '') + '</span>';
    if (t.artist) html += '<span class="mp-track-artist">' + t.artist + '</span>';
    html += '</div></div>';
  }
  list.innerHTML = html;
}

mpAudio.addEventListener('error', function() {
  document.getElementById('mpArtist').textContent = '\u26A0\uFE0F Fichier introuvable';
  mpPauseUI();
});
mpAudio.addEventListener('waiting', function() {
  document.getElementById('mpPlayIcon').className = 'fas fa-spinner fa-spin';
});
mpAudio.addEventListener('canplay', function() {
  if (mpPlaying) document.getElementById('mpPlayIcon').className = 'fas fa-pause';
});

  document.addEventListener('DOMContentLoaded', mpInit);
} // end guard