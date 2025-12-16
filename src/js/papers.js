const imgRef = document.querySelectorAll('.papers__img');
const spanEl = document.querySelector('.papers__l');
const spanRef = document.querySelector('.papers__w');
const textRef = document.querySelector('.papers__textw');
const textEl = document.querySelector('.papers__textl');
const buttonRef = document.querySelector('.papers__btn');

spanRef.textContent = 0;
spanEl.textContent = 0;

let userChoice = null;

// 1️⃣ вибір картинки
imgRef.forEach((img, i) => {
  img.addEventListener('click', () => {
    userChoice = i; // 0, 1, 2
  });
});

// 2️⃣ кнопка — показ результату
buttonRef.addEventListener('click', () => {
  if (userChoice === null) return;

  const num = Math.floor(Math.random() * 3); // 0–2

  textRef.style.display = 'none';
  textEl.style.display = 'none';

  if (
    (num === 2 && userChoice === 0) ||
    (num === 0 && userChoice === 1) ||
    (num === 1 && userChoice === 2)
  ) {
    // виграш
    textRef.style.display = 'block';
    spanRef.textContent = Number(spanRef.textContent) + 1;
  } else if (num !== userChoice) {
    // програш
    textEl.style.display = 'block';
    spanEl.textContent = Number(spanEl.textContent) + 1;
  }
});
