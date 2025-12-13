const textRef = document.querySelector('.years__identifyyear');
const inputRef = document.querySelector('.years__inputyear');
const buttonRef = document.querySelector('.years__buttonsubmit');

function checkYear(year) {
  textRef.classList.remove('yeartrue', 'yearfalse');
  if (year % 400 == 0) {
    textRef.textContent = 'Ви народилися у високосний рік!';
    textRef.classList.toggle('yeartrue');
  } else if (year % 100 == 0) {
    textRef.textContent = 'Ви народилися не у високосний рік!';
    textRef.classList.toggle('yearfalse');
  } else if (year % 4 == 0) {
    textRef.textContent = 'Ви народилися у високосний рік!';
    textRef.classList.toggle('yeartrue');
  } else {
    textRef.textContent = 'Ви народилися не у високосний рік!';
    textRef.classList.toggle('yearfalse');
  }
}

buttonRef.addEventListener('click', event => {
  event.preventDefault();
  const value = +inputRef.value;
  checkYear(value);
});
