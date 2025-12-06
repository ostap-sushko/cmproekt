const closeRef = document.querySelector('.modal-header__close');
const modalRef = document.querySelector('.modal-header');
const inputRef = document.querySelector('.modal-header__information');
const textRef = document.querySelector('.header__greetingsspan');
const formRef = document.querySelector('.modal-header__form');

closeRef.addEventListener('click', () => {
  modalRef.style.display = 'none';
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalRef.style.display = 'none';
  }
});

formRef.addEventListener('submit', event => {
  event.preventDefault();
  textRef.textContent = event.currentTarget.name.value;
  modalRef.style.display = 'none';
});
