// EB Construction static website JavaScript
// Keeps the site simple for GitHub Pages: mobile menu + active nav helper.

(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const navLinks = document.querySelectorAll('.nav a');

  if (toggle) {
    toggle.addEventListener('click', function () {
      const isOpen = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Optional: highlights the correct nav link if a page is renamed later.
  const current = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
})();
