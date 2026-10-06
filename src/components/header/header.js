const header = document.querySelector('.header');

if (header) {
  const burger = header.querySelector('.header__burger');
  const nav = header.querySelector('.header__nav');

  const toggleFixed = () => header.classList.toggle('header--fixed', window.scrollY > 0);

  const setMenuOpen = (isOpen) => {
    header.classList.toggle('header--open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  };

  toggleFixed();
  window.addEventListener('scroll', toggleFixed, { passive: true });

  burger.addEventListener('click', () => setMenuOpen(!header.classList.contains('header--open')));

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });
}
