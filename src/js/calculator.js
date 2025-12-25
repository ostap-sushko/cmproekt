const input1 = document.querySelector('.calculator__firstinput');
const input2 = document.querySelector('.calculator__secondinput');
const resultText = document.querySelector('.calculator__text');
const opButtons = document.querySelectorAll('.calculator__button');
const equalsBtn = document.querySelector('.calculator__btn');

let currentOp = null;

opButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentOp = btn.textContent.trim();

    opButtons.forEach(b => b.classList.remove('active-op'));
    btn.classList.add('active-op');
  });
});

equalsBtn.addEventListener('click', () => {
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);

  if (isNaN(a) || isNaN(b)) {
    resultText.textContent = 'Введіть обидва числа!';
    return;
  }

  if (!currentOp) {
    resultText.textContent = 'Виберіть дію!';
    return;
  }

  let result;

  switch (currentOp) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b === 0 ? 'Помилка: ділення на 0!' : a / b;
      break;
  }

  resultText.textContent = result;
});
