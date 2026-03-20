// LOGIN-ADMIN — scripts

'use strict';

// ── Appuyez sur Entrée pour soumettre ──
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') doLogin();
});

// ── Toggle mot de passe ──
function togglePassword() {
  var input = document.getElementById('password');
  var icon  = document.getElementById('eyeIcon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

// ── Connexion ──
function doLogin() {
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value;
  var errMsg   = document.getElementById('errorMsg');
  var errText  = document.getElementById('errorText');
  var card     = document.querySelector('.login-card');

  // Réinitialise l'erreur
  errMsg.classList.remove('show');

  if (!username || !password) {
    errText.textContent = 'Veuillez remplir tous les champs.';
    errMsg.classList.add('show');
    card.classList.add('shake');
    setTimeout(function() { card.classList.remove('shake'); }, 400);
    return;
  }

  // ── IDENTIFIANTS ADMIN (changez selon vos besoins) ──
  var ADMIN_USERS = [
    { user: 'admin',   pass: 'klikoo2025' },
    { user: 'klikoo',  pass: 'admin123'   }
  ];

  var valid = ADMIN_USERS.some(function(a) {
    return a.user === username && a.pass === password;
  });

  if (valid) {
    // Sauvegarde dans sessionStorage ET localStorage pour compatibilité
    sessionStorage.setItem('shopmaroc_admin', '1');
    localStorage.setItem('shopmaroc_admin', '1');
    window.location.href = 'dashboard.html';
  } else {
    errText.textContent = 'Identifiant ou mot de passe incorrect.';
    errMsg.classList.add('show');
    card.classList.add('shake');
    setTimeout(function() { card.classList.remove('shake'); }, 400);
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
  }
}