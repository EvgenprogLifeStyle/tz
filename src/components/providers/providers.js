const list = document.querySelector('.providers__list');

if (list) {
  [...list.children].forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    list.append(clone);
  });

  list.classList.add('providers__list--running');
}
