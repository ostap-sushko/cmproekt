const resultTime = document.querySelector('.calculatetime__time');
const form = document.querySelector('.calculatetime__form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const ms = event.currentTarget.elements.name.value.trim();
  const time = fromMinutes(ms);
  renderTime(time);
});

function renderTime({ days, hours, minutes }) {
  return (resultTime.textContent = `${days} дн. ${hours}:${minutes}`);
}

function fromMinutes(totalMinutes) {
  const days = Math.floor(totalMinutes / (60 * 24));
  totalMinutes %= 60 * 24;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const seconds = 0;

  return { days, hours, minutes, seconds };
}
