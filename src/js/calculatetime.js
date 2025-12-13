const resultTime = document.querySelector('.calculatetime__time');
const form = document.querySelector('.calculatetime__form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const ms = event.currentTarget.elements.name.value.trim();
  const time = fromMilliseconds(ms);
  renderTime(time);
});
console.log(form);

function renderTime({ days, hours, minutes, seconds }) {
  return (resultTime.textContent = `${days} дн. ${hours}:${minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }`);
}

function fromMilliseconds(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  ms %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(ms / (1000 * 60 * 60));
  ms %= 1000 * 60 * 60;

  const minutes = Math.floor(ms / (1000 * 60));
  ms %= 1000 * 60;

  const seconds = Math.floor(ms / 1000);

  return { days, hours, minutes, seconds };
}
