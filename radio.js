// ── Radio Bar - KLIKOO ────────────────────────────────────────────────
var rbAudio    = new Audio();
var rbTracks   = [];
var rbIdx      = 0;
var rbShuffle  = false;
var rbBarOpen  = false;
var rbPaused   = true;

var SHARED_KEY = 'klikoo_radio_tracks';
var STATE_KEY  = 'klikoo_radio_state';

function rbSaveState(forcePlaying) {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify({
      idx: rbIdx,
      time: rbAudio.currentTime || 0,
      playing: forcePlaying !== undefined ? forcePlaying : !rbAudio.paused
    }));
  } catch(e) {}
}
function rbLoadState() {
  try {
    var s = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
    return { idx: s.idx || 0, time: s.time || 0, playing: !!s.playing };
  } catch(e) { return { idx:0, time:0, playing:false }; }
}

// Default tracks - Musique calme & relaxante
var C1 = 'https://archive.org/download/1-hour-relaxing-music/';
var C2 = 'https://archive.org/download/6HourRelaxingMusicNatureSoundsGuitarInstrumentalAcousticGuitarBackgroundMusic2432C/';
var C3 = 'https://archive.org/download/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/';
var C4 = 'https://archive.org/download/RelaxingInstrumentalAsianMusicJapaneseMusicOrientalMusic/';
var C5 = 'https://archive.org/download/ZenMeditationMusicSoothingMusicRelaxingMusicMeditationZenBinauralBeats3236/';
var C6 = 'https://archive.org/download/relaxing-harp-music-sleep-meditation-spa-study-instrumental-background-music-49_202302/';
var C7 = 'https://archive.org/download/maxzik.com_20210924/';
var C8 = 'https://archive.org/download/gitar-instrumental/';

var DEFAULT_TRACKS = [
  // ── Groupe 1 : Calm & Instrumental ──────────────────────
  { id:1,  title:'Calm and Grateful',                  artist:'🎸 Guitare Douce', url: C1+'Calm%20and%20Grateful%20Music.mp3', cover:'' },
  { id:2,  title:'Light and Calm Instrumental',        artist:'🎸 Guitare Douce', url: C1+'Light%20and%20Calm%20Instrumental%20Music.mp3', cover:'' },
  { id:3,  title:'Light, Calm & Peaceful',             artist:'🎸 Guitare Douce', url: C1+'Light%2C%20Calm%20%26%20Peaceful%20Music.mp3', cover:'' },
  { id:4,  title:'Slow & Smooth Instrumental',         artist:'🎸 Guitare Douce', url: C1+'Slow%20%26%20Smooth%20Instrumental%20Music%20to%20relax.mp3', cover:'' },
  { id:5,  title:'Calm & Positive Instrumental',       artist:'🎸 Guitare Douce', url: C1+'calm%20and%20positive%20instrumental%20music.mp3', cover:'' },
  { id:6,  title:'Calming Relaxing Soothing',          artist:'🎸 Guitare Douce', url: C1+'calming%20relaxing%20soothing%20mindful%20music.mp3', cover:'' },
  { id:7,  title:'Calming Relaxing',                   artist:'🎸 Guitare Douce', url: C1+'calming%20relaxing.mp3', cover:'' },
  // ── Groupe 2 : Guitar Long Sessions ─────────────────────
  { id:8,  title:'3 Hour Relaxing Guitar',             artist:'🎸 Guitare Douce', url: C2+'3%20Hour%20Relaxing%20Guitar%20Music%20Meditation%20Music%20Instrumental%20Music%20Calming%20Music%20Soft%20Music%20%E2%98%AF2432.mp3', cover:'' },
  { id:9,  title:'Morning Guitar Café',                artist:'🎸 Guitare Douce', url: C2+'Morning%20Relaxing%20Music%20-%20Peaceful%20Guitar%20Cafe%20Music%20For%20Relax%20Study%20Work.mp3', cover:'' },
  { id:10, title:'Relaxing Background Guitar',         artist:'🎸 Guitare Douce', url: C2+'Relaxing%20Background%20Guitar%20Music%20-%20meditate%20focus%20study%20think.mp3', cover:'' },
  { id:11, title:'Classical Guitar Instrumental',      artist:'🎸 Guitare Douce', url: C2+'Relaxing%20Classical%20Guitar%20Instrumental%20music%20Classical%20Music%20Study%20music.mp3', cover:'' },
  { id:12, title:'Guitar Sleep & Meditation',          artist:'🎸 Guitare Douce', url: C2+'Relaxing%20Guitar%20Music%20Sleep%20Meditation%20Spa%20Study%20Instrumental%20Background%20Music%20%E2%98%8552.mp3', cover:'' },
  { id:13, title:'Guitar Soothing Music',              artist:'🎸 Guitare Douce', url: C2+'Relaxing%20Guitar%20Music%20Soothing%20Music%20Relax%20Meditation%20Music%20Instrumental%20Music%20to%20Relax%20%E2%98%AF2472.mp3', cover:'' },
  { id:14, title:'3 Hours Best Calming Guitar',        artist:'🎸 Guitare Douce', url: C2+'3%20HOURS%20Best%20Calming%20Music%20Classical%20Guitar%20Background%20Relax%20Sleep%20Study%20Meditation%202.mp3', cover:'' },
  { id:15, title:'3 Hours Relaxing Guitar',            artist:'🎸 Guitare Douce', url: C2+'3%20Hours%20of%20Relaxing%20Guitar%20Music%20for%20Meditation%20Sleep%20Relaxation%20Study%20%E2%98%8532.mp3', cover:'' },
  { id:16, title:'6 Hour Nature Guitar',               artist:'🎸 Guitare Douce', url: C2+'6%20Hour%20Relaxing%20Music%20Nature%20Sounds%20Guitar%20Instrumental%20Acoustic%20Guitar%20Background%20Music%20%E2%9C%BF2432C.mp3', cover:'' },
  // ── Groupe 3 : Spa & Relaxation ──────────────────────────
  { id:17, title:'Relaxing Bossa Nova Jazz',           artist:'🎶 Musique Douce', url: C3+'Relaxing%20Bossa%20Nova%20Jazz%20Instrumental%20Music%20-%20Cafe%20Music%20For%20WorkStudyRelax.mp3', cover:'' },
  { id:18, title:'Office Easy Listening',              artist:'🎶 Musique Douce', url: C3+'Instrumental%20music%20for%20working%20in%20office%20easy%20listening.mp3', cover:'' },
  { id:19, title:'Morning Positive Energy',            artist:'🎶 Musique Douce', url: C3+'Morning%20Relaxing%20Music%20-%20Positive%20Feelings%20and%20Energy%20%28Adele%29.mp3', cover:'' },
  { id:20, title:'Spa Calming Relaxation',             artist:'🎶 Musique Douce', url: C3+'Relaxing%20Spa%20Music%20Calming%20Music%20Relaxation%20Music%20Meditation%20Music%20Instrumental%20Music%20%E2%98%AF689.mp3', cover:'' },
  { id:21, title:'Pure Positive Energy',               artist:'🎶 Musique Douce', url: C3+'Pure%20Clean%20Positive%20Energy%20Vibration%20Meditation%20Music%20Healing%20Music%20Relax%20Mind%20Body%20Soul.mp3', cover:'' },
  { id:22, title:'Yoga Relaxing Music',                artist:'🎶 Musique Douce', url: C3+'Yoga%20Music%20Relaxing%20Music%20Calming%20Music%20Stress%20Relief%20Music%20Peaceful%20Music%20Relax%20%E2%9C%BF2658C.mp3', cover:'' },
  { id:23, title:'Cafe Jazz Bossa Nova',               artist:'🎶 Musique Douce', url: C3+'Cafe%20Music%21%21Jazz%20Bossa%20Nova%20instrumental%20Music%21%21Background%20Music%21%21.mp3', cover:'' },
  { id:24, title:'Zen Balance & Relaxation',           artist:'🎶 Musique Douce', url: C3+'ZEN%20MUSIC%20FOR%20BALANCE%20AND%20RELAXATION%5BFULL%20ALBUM%5DHD%20-%20YouTube.mp3', cover:'' },
  { id:25, title:'8 Hours Nature & Birdsong',          artist:'🎶 Musique Douce', url: C3+'8%20HOURS%20of%20Relaxing%20Nature%20Music%20with%20Birdsong%20-%20Meditation%20Work%20Study%20Sleep%20Relaxation.mp3', cover:'' },
  // ── Groupe 4 : Asian & Oriental Guitar ───────────────────
  { id:26, title:'Relaxing Spanish Guitar',            artist:'🎸 Guitare Douce', url: C4+'Relaxing%20Spanish%20Guitar%20FREE%20%28Royalty%20Free%29%20Background%20Music%20For%20YouTube%20Videos%20-%20World%20From%20Home.mp3', cover:'' },
  { id:27, title:'Asian Instrumental Music',           artist:'🎶 Oriental',       url: C4+'Relaxing%20Instrumental%20Asian%20Music%20-%20Japanese%20Music%20-%20Oriental%20Music.mp3', cover:'' },
  { id:28, title:'Minimal Ambient Japan Style',        artist:'🎶 Oriental',       url: C4+'Minimal%20Ambient%20Background%20Music%20_%20Japan%20Style%20Instrumental%20Music%20_%20Royalty-Free%20Music%20by%20Argsound.mp3', cover:'' },
  { id:29, title:'Royalty Free Minimalism',            artist:'🎶 Ambient',        url: C4+'Royalty%20free%20Minimalism%20_%20Ambient%20_%20Abstract%20Music.mp3', cover:'' },
  { id:30, title:'Lounge Minimal Background',          artist:'🎶 Musique Douce',  url: C4+'Lounge%20Minimal%20Background%20Music%20_%20Positive%20Instrumental%20Music%20_%20Royalty-Free%20Music%20by%20Argsound.mp3', cover:'' },
  // ── Groupe 5 : Zen & Meditation ──────────────────────────
  { id:31, title:'4 Hours Peaceful Instrumental',      artist:'🎶 Zen',            url: C5+'4%20hours%20Peaceful%20%26%20Relaxing%20Instrumental%20Music-Long%20Playlist.mp3', cover:'' },
  { id:32, title:'Beautiful Celtic Harp',              artist:'🎶 Zen',            url: C5+'Beautiful%20Celtic%20Music%20Celtic%20Harp%20Relaxing%2C%20Ambient%2C%20Instrumental.mp3', cover:'' },
  { id:33, title:'Beautiful Romantic Piano',           artist:'🎹 Piano Doux',     url: C5+'Beautiful%20Relaxing%20Music%20Romantic%20Music%2C%20Piano%20Music%2C%20Violin%20Music%2C%20Cello%20Music%20%E2%98%85115.mp3', cover:'' },
  { id:34, title:'Healing Harp Music',                 artist:'🎶 Zen',            url: C5+'Healing%20And%20Relaxing%20Music%20For%20Meditation%20%28Harp%2009%29%20-%20Pablo%20Arellano.mp3', cover:'' },
  { id:35, title:'Relaxing Mix Beautiful Piano',       artist:'🎹 Piano Doux',     url: C5+'Relaxing%20Music%20Mix%20BEAUTIFUL%20PIANO.mp3', cover:'' },
  { id:36, title:'Relaxing Piano Romantic',            artist:'🎹 Piano Doux',     url: C5+'Relaxing%20Piano%20Music%20Relaxing%20Music%2C%20Romantic%20Music%2C%20Beautiful%20Music%2C%20Soothing%20Sleep%20Music%20%E2%98%85119.mp3', cover:'' },
  { id:37, title:'3 Hours Piano & Flute',              artist:'🎹 Piano Doux',     url: C5+'3%20HOURS%20The%20Best%20Relaxing%20Piano%20Flute%20Music%20Ever.mp3', cover:'' },
  { id:38, title:'Relaxing Sleep Deep Music',          artist:'🎶 Zen',            url: C5+'Relaxing%20Sleep%20Music%20Deep%20Sleeping%20Music%2C%20Relaxing%20Music%2C%20Stress%20Relief%2C%20Meditation%20Music%20%E2%98%8568.mp3', cover:'' },
  { id:39, title:'Relaxing Harp Rain & Thunder',       artist:'🎶 Zen',            url: C5+'Relaxing%20Harp%20Music%20Rain%20%26%20Thunder%2C%20Sleep%20Music%2C%20Relaxing%20Music%2C%20Sleeping%20Music%2C%20Fall%20Asleep%20%E2%98%85120.mp3', cover:'' },
  { id:40, title:'Tibetan Meditation Music',           artist:'🎶 Zen',            url: C5+'Tibetan%20Meditation%20Music%2C%20Soothing%20Music%2C%20Relaxing%20Music%20Meditation%2C%20Binaural%20Beats%2C%20%E2%98%AF3186.mp3', cover:'' },
  // ── Groupe 6 : Harp & Sleep ───────────────────────────────
  { id:41, title:'Relaxing Harp Sleep & Spa',          artist:'🎶 Zen',            url: C6+'Relaxing%20Harp%20Music%20Sleep%20Music%2C%20Stress%20Relief%2C%20Meditation%20Music%2C%20Spa%20Music%2C%20Background%20Music%20%E2%98%8553.mp3', cover:'' },
  { id:42, title:'Relaxing Harp Meditation',           artist:'🎶 Zen',            url: C6+'Relaxing%20Harp%20Music%20Sleep%2C%20Meditation%2C%20Spa%2C%20Study%20Instrumental%20Background%20Music%20%E2%98%8549.mp3', cover:'' },
  // ── Groupe 7 : Guitare Marocaine & Douce ─────────────────
  { id:43, title:'Mounamou Guitare Douce',             artist:'🎸 Guitare Douce',  url: C7+'mounamou%20guitar%20douce.mp3', cover:'' },
  { id:44, title:'Nova Casa - Wave of Feelings',       artist:'🎶 Musique Douce',  url: C7+'nova_casa-wave_of_feelings.mp3', cover:'' },
  { id:45, title:'Roberto Sol - Can No Instrumental',  artist:'🎶 Musique Douce',  url: C7+'roberto_sol-can_no%20instrumental.mp3', cover:'' },
  { id:46, title:'The Sushi Club - Amygdalu',          artist:'🎶 Musique Douce',  url: C7+'the_sushi_club-amygdalu.mp3', cover:'' },
  // ── Groupe 8 : Guitar Instrumental Collection ────────────
  { id:47, title:'The Most Beautiful Guitar',          artist:'🎸 Guitare Douce',  url: C8+'THE%20MOST%20BEAUTIFUL%20GUITAR%20COLLECTION%20-%20Best%20Relaxing%20Guitar%20Instrumental%20Music%20Hits.mp3', cover:'' },
  { id:48, title:'Hotel California Guitar',            artist:'🎸 Guitare Douce',  url: C8+'Hotel%20California.mp3', cover:'' },
  { id:49, title:'No Air Supply Guitar',               artist:'🎸 Guitare Douce',  url: C8+'No%20Air%20Supply.mp3', cover:'' },
  { id:50, title:'Leo Rojas Greatest Hits',            artist:'🎶 Flûte Douce',    url: C3+'The%20Best%20Of%20Leo%20Rojas%20Leo%20Rojas%20Greatest%20Hits%20Full%20Album%202017.mp3', cover:'' }
];

function rbLoadTracks() {
  rbTracks = DEFAULT_TRACKS.slice();
  try {
    var keys = ['kl_pl','klikoo_playlist','klikoo_playlist_meta'];
    for (var i = 0; i < keys.length; i++) {
      var data = localStorage.getItem(keys[i]);
      if (data && data !== '[]') {
        var parsed = JSON.parse(data);
        var userTracks = parsed.filter(function(t) {
          return t && t.url && !t.url.startsWith('blob:') && !t.isFile && !t.hasFile;
        });
        if (userTracks.length > 0) {
          rbTracks = userTracks.concat(DEFAULT_TRACKS);
          break;
        }
      }
    }
  } catch(e) {}
}

function toggleRadioBar() {
  rbBarOpen = !rbBarOpen;
  document.getElementById('radioBar').classList.toggle('visible', rbBarOpen);
  document.getElementById('radioToggle').classList.toggle('bar-open', rbBarOpen);
  document.getElementById('radioToggleIcon').className = rbBarOpen ? 'fas fa-times' : 'fas fa-music';
  document.body.classList.toggle('radio-open', rbBarOpen);
  if (rbBarOpen) {
    rbLoadTracks();
    if (rbTracks.length > 0 && !rbAudio.src) rbLoadTrack(0, false);
    rbRenderPlaylist(); // refresh playlist if open
  }
}

function rbLoadTrack(idx, autoPlay) {
  if (!rbTracks.length) return;
  rbIdx = idx;
  var t = rbTracks[idx];
  document.getElementById('rbTitle').textContent  = t.title  || 'Sans titre';
  document.getElementById('rbArtist').textContent = t.artist || '--';
  document.getElementById('rbProgressFill').style.width = '0%';
  document.getElementById('rbCurrent').textContent  = '0:00';
  document.getElementById('rbDuration').textContent  = '0:00';

  var disc = document.getElementById('rbDisc');
  if (t.cover) {
    disc.innerHTML = '<img src="' + t.cover + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';
  } else {
    disc.textContent = '\uD83C\uDFB5';
  }

  var titleEl = document.getElementById('rbTitle');
  if (titleEl) titleEl._originalTitle = t.title || 'Sans titre';

  rbAudio.src = t.url || '';
  if (autoPlay) rbAudio.play().catch(function(){});
}

function rbTogglePlay() {
  if (!rbTracks.length) return;
  if (rbAudio.paused) rbAudio.play().catch(function(){});
  else rbAudio.pause();
}

function rbPrev() {
  if (!rbTracks.length) return;
  rbLoadTrack(rbIdx > 0 ? rbIdx - 1 : rbTracks.length - 1, !rbAudio.paused);
}
function rbNext() {
  if (!rbTracks.length) return;
  var idx = rbShuffle
    ? Math.floor(Math.random() * rbTracks.length)
    : (rbIdx + 1) % rbTracks.length;
  rbLoadTrack(idx, !rbAudio.paused);
}
function rbToggleShuffle() {
  rbShuffle = !rbShuffle;
  document.getElementById('rbShuffleBtn').classList.toggle('active', rbShuffle);
}
function rbSeek(e) {
  if (!rbAudio.duration) return;
  var rect = e.currentTarget.getBoundingClientRect();
  rbAudio.currentTime = ((e.clientX - rect.left) / rect.width) * rbAudio.duration;
}
var VOL_KEY = 'klikoo_radio_vol';

function rbSetVol(v) {
  rbAudio.volume = v / 100;
  // Save volume to localStorage so all pages share the same level
  try { localStorage.setItem(VOL_KEY, v); } catch(e) {}
  // Update slider background fill
  var slider = document.getElementById('rbVolSlider');
  if (slider) slider.style.background = 'linear-gradient(to right, #ff8716 0%, #ff8716 ' + v + '%, rgba(255,255,255,0.2) ' + v + '%, rgba(255,255,255,0.2) 100%)';
}

function rbRestoreVol() {
  try {
    var saved = localStorage.getItem(VOL_KEY);
    var v = saved !== null ? parseInt(saved) : 80;
    rbAudio.volume = v / 100;
    var slider = document.getElementById('rbVolSlider');
    if (slider) {
      slider.value = v;
      slider.style.background = 'linear-gradient(to right, #ff8716 0%, #ff8716 ' + v + '%, rgba(255,255,255,0.2) ' + v + '%, rgba(255,255,255,0.2) 100%)';
    }
  } catch(e) {}
}

rbAudio.addEventListener('ended', function() { rbNext(); });
rbAudio.addEventListener('loadedmetadata', function() {
  document.getElementById('rbDuration').textContent = rbFmt(rbAudio.duration);
  var titleEl = document.getElementById('rbTitle');
  if (titleEl && titleEl._errorTitle) {
    titleEl.textContent = titleEl._originalTitle || '';
    titleEl._errorTitle = false;
  }
});
rbAudio.addEventListener('loadstart', function() {
  document.getElementById('rbPlayIcon').className = 'fas fa-spinner fa-spin';
});
rbAudio.addEventListener('canplay', function() {
  if (rbAudio.paused) {
    document.getElementById('rbPlayIcon').className = 'fas fa-play';
  }
});
rbAudio.addEventListener('error', function() {
  var skipCount = rbAudio._skipCount || 0;
  rbAudio._skipCount = skipCount + 1;
  if (rbAudio._skipCount >= rbTracks.length) {
    rbAudio._skipCount = 0;
    document.getElementById('rbTitle').textContent = '⚠️ Aucune piste disponible';
    document.getElementById('rbArtist').textContent = 'Vérifiez votre connexion internet';
    document.getElementById('rbPlayIcon').className = 'fas fa-play';
    return;
  }
  var nextIdx = (rbIdx + 1) % rbTracks.length;
  setTimeout(function() {
    rbLoadTrack(nextIdx, !rbAudio.paused || rbAudio._wasPlaying);
  }, 500);
});
rbAudio.addEventListener('play', function() {
  rbAudio._wasPlaying = true;
  rbAudio._skipCount = 0;
  document.getElementById('rbPlayIcon').className = 'fas fa-pause';
  document.getElementById('rbDisc').classList.add('playing');
});
rbAudio.addEventListener('pause', function() {
  rbAudio._wasPlaying = false;
  document.getElementById('rbPlayIcon').className = 'fas fa-play';
  document.getElementById('rbDisc').classList.remove('playing');
  rbSaveState(false);
});

// ── Sauvegarde instantanée ─────────────────────────────────
// Sauvegarde à chaque tick de lecture (timeupdate)
rbAudio.addEventListener('timeupdate', function() {
  if (!rbAudio.duration) return;
  document.getElementById('rbProgressFill').style.width = (rbAudio.currentTime/rbAudio.duration*100) + '%';
  document.getElementById('rbCurrent').textContent = rbFmt(rbAudio.currentTime);
  // Sauvegarde position toutes les secondes environ
  if (!rbAudio._lastSave || rbAudio.currentTime - rbAudio._lastSave > 1) {
    rbAudio._lastSave = rbAudio.currentTime;
    rbSaveState(true);
  }
});

// Sauvegarde immédiate quand on quitte la page
window.addEventListener('pagehide', function() {
  rbSaveState(!rbAudio.paused);
});
window.addEventListener('beforeunload', function() {
  rbSaveState(!rbAudio.paused);
});
// visibilitychange : quand l'onglet est caché/quitté
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    rbSaveState(!rbAudio.paused);
  }
});

function rbFmt(s) {
  if (!s || isNaN(s)) return '0:00';
  return Math.floor(s/60) + ':' + (Math.floor(s%60)<10?'0':'') + Math.floor(s%60);
}

window.addEventListener('load', function() {

  function startRadio() {
    rbLoadTracks();
    rbRestoreVol();

    setTimeout(function() {
      rbBarOpen = true;
      document.getElementById('radioBar').classList.add('visible');
      document.getElementById('radioToggle').classList.add('bar-open');
      document.getElementById('radioToggleIcon').className = 'fas fa-times';
      document.body.classList.add('radio-open');

      if (rbTracks.length > 0) {
        var state = rbLoadState();
        var trackIdx = (state.idx >= 0 && state.idx < rbTracks.length) ? state.idx : 0;

        // Charger la piste sauvegardée
        rbLoadTrack(trackIdx, false);

        // Restaurer la position dans la piste
        var seekDone = false;
        function doSeek() {
          if (seekDone) return;
          if (rbAudio.readyState >= 1 && state.time > 1) {
            seekDone = true;
            rbAudio.currentTime = state.time;
          }
        }
        if (state.time > 1) {
          rbAudio.addEventListener('loadedmetadata', function onMeta() {
            rbAudio.removeEventListener('loadedmetadata', onMeta);
            doSeek();
          });
          rbAudio.addEventListener('canplay', function onCan() {
            rbAudio.removeEventListener('canplay', onCan);
            doSeek();
          });
          // Fallback timeout
          setTimeout(doSeek, 2000);
        }

        // Reprendre la lecture si elle était active
        if (state.playing) {
          // Attendre que l'audio soit prêt puis jouer
          function tryPlay() {
            rbAudio.play().catch(function() {
              // Navigateur bloque autoplay → attendre geste utilisateur
              var resume = function() {
                rbAudio.play().catch(function(){});
                ['click','touchstart','keydown'].forEach(function(ev) {
                  document.removeEventListener(ev, resume);
                });
              };
              ['click','touchstart','keydown'].forEach(function(ev) {
                document.addEventListener(ev, resume, { once: true });
              });
            });
          }
          if (rbAudio.readyState >= 3) {
            tryPlay();
          } else {
            rbAudio.addEventListener('canplay', function onReady() {
              rbAudio.removeEventListener('canplay', onReady);
              tryPlay();
            });
            setTimeout(tryPlay, 1500); // fallback
          }
        }
      } else {
        document.getElementById('rbTitle').textContent  = 'Aucune piste';
        document.getElementById('rbArtist').textContent = 'Ajoutez des chansons avec URL dans le Dashboard';
      }
    }, 100);
  }

  try {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'dashboard.html';
    var done = false;

    iframe.onload = function() {
      if (done) return;
      done = true;
      try {
        var iLS = iframe.contentWindow.localStorage;
        var data = iLS.getItem('kl_pl') || iLS.getItem('klikoo_playlist');
        if (data && data !== '[]') {
          localStorage.setItem('kl_pl', data);
          localStorage.setItem('klikoo_playlist', data);
        }
      } catch(e) { console.log('[Radio] iframe blocked:', e.message); }
      document.body.removeChild(iframe);
      startRadio();
    };

    setTimeout(function() {
      if (done) return;
      done = true;
      try { document.body.removeChild(iframe); } catch(e){}
      startRadio();
    }, 2000);

    document.body.appendChild(iframe);
  } catch(e) {
    startRadio();
  }
});

// ── PLAYLIST PANEL ────────────────────────────────────────────
var rbPlaylistOpen = false;

function rbTogglePlaylist() {
  rbPlaylistOpen = !rbPlaylistOpen;
  var panel = document.getElementById('rbPlaylistPanel');
  var btn   = document.getElementById('rbPlaylistBtn');
  if (panel) panel.classList.toggle('open', rbPlaylistOpen);
  if (btn)   btn.classList.toggle('active', rbPlaylistOpen);
  if (rbPlaylistOpen) rbRenderPlaylist();
}

function rbRenderPlaylist(filter) {
  var list = document.getElementById('rbPlList');
  if (!list) return;
  filter = (filter || '').toLowerCase().trim();
  list.innerHTML = '';

  var visible = rbTracks.filter(function(t) {
    if (!filter) return true;
    return (t.title  || '').toLowerCase().indexOf(filter) !== -1 ||
           (t.artist || '').toLowerCase().indexOf(filter) !== -1;
  });

  // Update count
  var countEl = document.getElementById('rbPlCount');
  if (countEl) countEl.textContent = rbTracks.length + ' pistes';

  if (visible.length === 0) {
    list.innerHTML = '<div class="rb-pl-empty"><i class="fas fa-search"></i>Aucun résultat</div>';
    return;
  }

  var isPlaying = !rbAudio.paused;

  visible.forEach(function(t, visIdx) {
    var realIdx = rbTracks.indexOf(t);
    var isActive = (realIdx === rbIdx);
    var emoji = t.artist && t.artist.indexOf('Piano') !== -1 ? '🎹'
              : t.artist && t.artist.indexOf('Zen') !== -1 ? '🎶'
              : t.artist && t.artist.indexOf('Oriental') !== -1 ? '🎶'
              : '🎸';

    var item = document.createElement('div');
    item.className = 'rb-pl-item' + (isActive ? ' active' : '') + (isActive && isPlaying ? ' playing' : '');
    item.dataset.idx = realIdx;
    item.innerHTML =
      '<div class="rb-pl-num">' + (realIdx + 1) + '</div>' +
      '<div class="rb-eq"><span></span><span></span><span></span></div>' +
      '<div class="rb-pl-icon">' + emoji + '</div>' +
      '<div class="rb-pl-meta">' +
        '<div class="rb-pl-name">' + (t.title || 'Sans titre') + '</div>' +
        '<div class="rb-pl-artist">' + (t.artist || '') + '</div>' +
      '</div>';

    item.addEventListener('click', function() {
      rbLoadTrack(realIdx, true);
      rbRenderPlaylist(document.getElementById('rbPlSearch') ? document.getElementById('rbPlSearch').value : '');
    });
    list.appendChild(item);
  });
}

function rbUpdatePlaylistActive() {
  if (!rbPlaylistOpen) return;
  var items = document.querySelectorAll('#rbPlList .rb-pl-item');
  var isPlaying = !rbAudio.paused;
  items.forEach(function(item) {
    var idx = parseInt(item.dataset.idx);
    item.classList.toggle('active', idx === rbIdx);
    item.classList.toggle('playing', idx === rbIdx && isPlaying);
  });
  // Scroll active item into view
  var activeItem = document.querySelector('#rbPlList .rb-pl-item.active');
  if (activeItem) {
    activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

// Hook into existing audio events to keep playlist in sync
rbAudio.addEventListener('play',  function() { rbUpdatePlaylistActive(); });
rbAudio.addEventListener('pause', function() { rbUpdatePlaylistActive(); });

// Also re-render when new track loads
var _origRbLoadTrack = rbLoadTrack;
rbLoadTrack = function(idx, autoPlay) {
  _origRbLoadTrack(idx, autoPlay);
  setTimeout(function() { rbUpdatePlaylistActive(); }, 50);
};