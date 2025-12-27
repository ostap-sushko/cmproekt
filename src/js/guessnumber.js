const textRef = document.querySelector('.guessnumber__identifyyear');
const inputRef = document.querySelector('.guessnumber__inputyear');
const formRef = document.querySelector('.guessnumber__form');

formRef.addEventListener('submit', e => {
  e.preventDefault();
  const num = Math.floor(Math.random() * (10 - 1) + 1);
  const value = Number(inputRef.value);

  if (value === num) {
    textRef.textContent = `🎉Вітаю, ви вгадали число! ${num}`;
    textRef.classList.add('yeartrue');
    textRef.classList.remove('yearfalse');
  } else {
    textRef.textContent = '❌ Неправильне число';
    textRef.classList.add('yearfalse');
    textRef.classList.remove('yeartrue');
  }
});
