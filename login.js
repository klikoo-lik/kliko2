// LOGIN — scripts

'use strict';

console.log('🔐 KLIKOO Login');

  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('remember');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const forgotLink = document.getElementById('forgotLink');
  const googleBtn = document.getElementById('googleBtn');
  const facebookBtn = document.getElementById('facebookBtn');
  const submitBtn = document.getElementById('submitBtn');
  const errorMsg = document.getElementById('errorMsg');
  const errorText = document.getElementById('errorText');
  const successMsg = document.getElementById('successMsg');
  const successText = document.getElementById('successText');

  function showError(msg) {
    successMsg.classList.remove('show');
    errorText.textContent = msg;
    errorMsg.classList.add('show');
    setTimeout(() => errorMsg.classList.remove('show'), 5000);
  }

  function showSuccess(msg) {
    errorMsg.classList.remove('show');
    successText.textContent = msg;
    successMsg.classList.add('show');
  }

  // Toggle password visibility
  togglePasswordBtn.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordBtn.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      togglePasswordBtn.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });

  // Mot de passe oublié
  forgotLink.addEventListener('click', function (e) {
    e.preventDefault();
    const email = prompt('Entrez votre email :');
    if (!email) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('Email invalide');
      return;
    }
    const users = JSON.parse(localStorage.getItem('kliko_users') || '[]');
    const user = users.find(u => u.email === email);
    if (user) {
      showSuccess(`Email de réinitialisation envoyé à ${email}`);
      console.log(`Mot de passe actuel: ${user.password}`);
    } else {
      showError('Aucun compte trouvé avec cet email');
    }
  });

  googleBtn.addEventListener('click', () => showError('Connexion Google : bientôt disponible'));
  facebookBtn.addEventListener('click', () => showError('Connexion Facebook : bientôt disponible'));

  // Soumission du formulaire
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;

    if (!email || !password) {
      showError('Veuillez remplir tous les champs');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('Adresse email invalide');
      return;
    }
    if (password.length < 6) {
      showError('Mot de passe trop court (minimum 6 caractères)');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion en cours...';

    const users = JSON.parse(localStorage.getItem('kliko_users') || '[]');
    const user = users.find(u => u.email === email);

    if (!user) {
      showError('Aucun compte trouvé avec cet email');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Se connecter';
      return;
    }

    if (user.password !== password) {
      showError('Mot de passe incorrect');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Se connecter';
      return;
    }

    // Créer la session
    const session = {
      id: user.id,
      email: user.email,
      nom: user.nom,
      prenom: user.prenom,
      loginTime: new Date().toISOString()
    };

    // ✅ remember me: localStorage (persistant) ou sessionStorage (onglet seulement)
    if (remember) {
      localStorage.setItem('klikoo_session', JSON.stringify(session));
    } else {
      sessionStorage.setItem('klikoo_session', JSON.stringify(session));
    }

    // Mettre à jour lastLogin
    user.lastLogin = new Date().toISOString();
    localStorage.setItem('kliko_users', JSON.stringify(users));

    console.log('✅ Connecté:', user.email);
    showSuccess('Connexion réussie ! Redirection...');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });

  // ✅ BUG CORRIGÉ: Le redirect automatique est maintenant placé APRÈS
  // que la page soit complètement chargée, et uniquement sur login.html
  // (pas sur inscription.html)
  window.addEventListener('load', function () {
    const session = localStorage.getItem('klikoo_session') || sessionStorage.getItem('klikoo_session');
    if (session) {
      try {
        const parsed = JSON.parse(session);
        if (parsed && parsed.email) {
          console.log('✅ Déjà connecté, redirection...');
          window.location.href = 'index.html';
        }
      } catch (err) {
        // Session corrompue, on la supprime
        localStorage.removeItem('klikoo_session');
        sessionStorage.removeItem('klikoo_session');
      }
    }
  });