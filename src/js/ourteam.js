const nextRef = document.querySelector('.ourteam__btnnext');
const backRef = document.querySelector('.ourteam__btnback');
const imgRef = document.querySelector('.ourteam__img');
const textRef = document.querySelector('.ourteam__text');
const subtextRef = document.querySelector('.ourteam__subtext');
const stripesRef = document.querySelectorAll('.ourteam__stripe');

const teamData = [
  {
    img: '../img/anonymous.png',
    text: 'Остап Сушко',
    subtext: 'Тімлід',
  },
  {
    img: '../img/matviy.jpg',
    text: 'Матвій Присяжнюк',
    subtext: 'Скраммайстер',
  },
  {
    img: '../img/andrew.jpg',
    text: 'Андрій Лопушинський',
    subtext: 'Розробник сайту',
  },
  {
    img: '../img/volodya.jpg',
    text: 'Володя Качур',
    subtext: 'Розробник сайту',
  },
];

let currentIndex = 0;

function updateTeam() {
  imgRef.src = teamData[currentIndex].img;
  textRef.textContent = teamData[currentIndex].text;
  subtextRef.textContent = teamData[currentIndex].subtext;

  stripesRef.forEach((stripe, index) => {
    stripe.classList.toggle('active', index === currentIndex);
  });
}

nextRef.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= teamData.length) {
    currentIndex = 0;
  }

  updateTeam();
});

backRef.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = teamData.length - 1;
  }

  updateTeam();
});

updateTeam();
