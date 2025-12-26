const closeRef = document.querySelector('.modal-header__close');
const modalRef = document.querySelector('.modal-header');
const inputRef = document.querySelector('.modal-header__information');
const textRef = document.querySelector('.header__greetingsspan');
const formRef = document.querySelector('.modal-header__form');
const backdrop = document.querySelector('.backdrop');
document.body.style.overflow = 'hidden';

closeRef.addEventListener('click', () => {
  modalRef.style.display = 'none';
  backdrop.style.display = 'none';
  document.body.style.overflow = 'visible';
});

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    modalRef.style.display = 'none';
    backdrop.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalRef.style.display = 'none';
    backdrop.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
});

formRef.addEventListener('submit', event => {
  event.preventDefault();
  textRef.textContent = event.currentTarget.name.value;
  modalRef.style.display = 'none';
  backdrop.style.display = 'none';
  document.body.style.overflow = 'visible';
});
