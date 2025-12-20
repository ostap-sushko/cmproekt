const resultTime = document.querySelector('.calculatetime__time');
const form = document.querySelector('.calculatetime__form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const ms = event.currentTarget.elements.name.value.trim();
  const time = fromMinutes(ms);
  renderTime(time);
});
console.log(form);

function renderTime({ days, hours, minutes }) {
  return (resultTime.textContent = `${days} дн. ${hours}:${minutes}`)}

function fromMinutes(totalMinutes) {
  const days = Math.floor(totalMinutes / (60 * 24));
  totalMinutes %= 60 * 24;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const seconds = 0; // бо початкове значення у хвилинах

  return { days, hours, minutes, seconds };
}







// function fromMilliseconds(ms) {
//   const days = Math.floor(ms / (1000 * 60 * 60 * 24));
//   ms %= 1000 * 60 * 60 * 24;

//   const hours = Math.floor(ms / (1000 * 60 * 60));
//   ms %= 1000 * 60 * 60;

//   const minutes = Math.floor(ms / (1000 * 60));
//   ms %= 1000 * 60;

//   const seconds = Math.floor(ms / 1000);

//   return { days, hours, minutes, seconds };
// }
