// SIGNUP — scripts

'use strict';

console.log('📝 KLIKOO Signup');

  const signupForm = document.getElementById('signupForm');
  const prenomInput = document.getElementById('prenom');
  const nomInput = document.getElementById('nom');
  const emailInput = document.getElementById('email');
  const telephoneInput = document.getElementById('telephone');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const termsCheckbox = document.getElementById('terms');
  const togglePassword1 = document.getElementById('togglePassword1');
  const togglePassword2 = document.getElementById('togglePassword2');
  const submitBtn = document.getElementById('submitBtn');
  const errorMsg = document.getElementById('errorMsg');
  const errorText = document.getElementById('errorText');
  const successMsg = document.getElementById('successMsg');
  const successText = document.getElementById('successText');
  const bars = [
    document.getElementById('strength-1'),
    document.getElementById('strength-2'),
    document.getElementById('strength-3'),
    document.getElementById('strength-4')
  ];
  const strengthText = document.getElementById('strengthText');

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
  togglePassword1.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword1.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      togglePassword1.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });

  togglePassword2.addEventListener('click', function () {
    if (confirmPasswordInput.type === 'password') {
      confirmPasswordInput.type = 'text';
      togglePassword2.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      confirmPasswordInput.type = 'password';
      togglePassword2.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });

  // Password strength checker
  function checkPasswordStrength() {
    const password = passwordInput.value;
    bars.forEach(bar => bar.className = 'strength-bar');
    if (!password.length) { strengthText.textContent = ''; return; }

    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    strength = Math.min(Math.ceil(strength * 4 / 5), 4);

    if (strength <= 1) {
      bars[0].classList.add('active-weak');
      strengthText.textContent = 'Faible';
      strengthText.className = 'strength-text strength-weak';
    } else if (strength === 2) {
      bars[0].classList.add('active-medium');
      bars[1].classList.add('active-medium');
      strengthText.textContent = 'Moyen';
      strengthText.className = 'strength-text strength-medium';
    } else if (strength === 3) {
      bars[0].classList.add('active-strong');
      bars[1].classList.add('active-strong');
      bars[2].classList.add('active-strong');
      strengthText.textContent = 'Fort';
      strengthText.className = 'strength-text strength-strong';
    } else {
      bars.forEach(bar => bar.classList.add('active-strong'));
      strengthText.textContent = 'Très fort';
      strengthText.className = 'strength-text strength-strong';
    }
  }

  passwordInput.addEventListener('input', checkPasswordStrength);

  // Form submission
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const prenom = prenomInput.value.trim();
    const nom = nomInput.value.trim();
    const email = emailInput.value.trim();
    const telephone = telephoneInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const terms = termsCheckbox.checked;

    if (!prenom || !nom || !email || !password || !confirmPassword) {
      showError('Veuillez remplir tous les champs obligatoires');
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
    if (password !== confirmPassword) {
      showError('Les mots de passe ne correspondent pas');
      return;
    }
    if (!terms) {
      showError('Veuillez accepter les conditions d\'utilisation');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Création en cours...';

    const users = JSON.parse(localStorage.getItem('kliko_users') || '[]');

    if (users.some(u => u.email === email)) {
      showError('Cet email est déjà utilisé');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Créer mon compte';
      return;
    }

    const newUser = {
      id: Date.now(),
      prenom: prenom,
      nom: nom,
      email: email,
      telephone: telephone,
      password: password,
      createdAt: new Date().toISOString(),
      lastLogin: null
    };

    users.push(newUser);
    localStorage.setItem('kliko_users', JSON.stringify(users));
    console.log('✅ Compte créé:', newUser.email);

    // Créer la session
    const session = {
      id: newUser.id,
      email: newUser.email,
      nom: newUser.nom,
      prenom: newUser.prenom,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem('klikoo_session', JSON.stringify(session));

    // ✅ Envoi automatique offre -40% sur WhatsApp du client
    if (telephone) {
      const offreMsg = [
        '🎉 *Bienvenue chez KLIKOO Store !*',
        '',
        'Bonjour ' + prenom + ' 👋',
        '',
        'Merci de rejoindre notre communauté ! 🙏',
        'En tant que nouveau membre, vous bénéficiez de :',
        '',
        '🔥 *-40% SUR VOTRE PREMIÈRE COMMANDE*',
        '🎁 Code promo : *BIENVENUE40*',
        '',
        '✅ Livraison rapide 24-48h partout au Maroc',
        '✅ Paiement sécurisé',
        '✅ Retour facile sous 3 jours',
        '',
        '👉 Commandez maintenant : https://klikoo.ma',
        '',
        '_KLIKOO Store — Votre boutique préférée au Maroc_ 🇲🇦'
      ].join('\n');

      // Nettoyer le numéro (supprimer espaces, tirets, +)
      const cleanPhone = telephone.replace(/[\s\-\+]/g, '').replace(/^0/, '212');
      window.open('https://wa.me/' + cleanPhone + '?text=' + encodeURIComponent(offreMsg), '_blank');
    }

    showSuccess('Compte créé avec succès ! Redirection...');
    setTimeout(() => window.location.href = 'index.html', 2000);
  });

  // ✅ BUG CORRIGÉ: Suppression du redirect automatique sur la page inscription
  // Avant: si l'utilisateur était connecté, il était redirigé même sur cette page
  // Maintenant: le redirect automatique est UNIQUEMENT dans login.html