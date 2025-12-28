document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (!toggleButton || !nav) return;

  const navLinks = nav.querySelectorAll('a');

  const closeMenu = () => {
    nav.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'เปิดเมนู');
  };

  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggleButton.setAttribute('aria-label', isOpen ? 'ปิดเมนู' : 'เปิดเมนู');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('active')) return;
    if (!(event.target instanceof Node)) return;
    if (nav.contains(event.target) || toggleButton.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
      toggleButton.focus();
    }
  });
});
