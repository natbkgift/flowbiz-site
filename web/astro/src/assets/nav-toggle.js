document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (!toggleButton || !nav) return;

  const navLinks = nav.querySelectorAll('a');

  const closeMenu = () => {
    nav.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', 'false');
  };

  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
      toggleButton.focus();
    }
  });
});
