const modalMenu = document.querySelector('#modal-menu');
const openMenuButton = document.querySelector('#open-menu-button');
const closeMenuButton = document.querySelector('#close-menu-button');

openMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalMenu.classList.remove('hide');
  modalMenu.classList.add('show');
});

closeMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalMenu.classList.remove('show');
  modalMenu.classList.add('hide');
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    modalMenu.classList.remove('show');
    modalMenu.classList.add('hide');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});