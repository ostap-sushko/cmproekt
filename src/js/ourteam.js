import ostap from "../img/anonymous.png"
import matvey from '../img/matviy.jpg'
import andrew from '../img/andrew.jpg'
import volodya from '../img/volodya.jpg'

const nextRef = document.querySelector('.ourteam__btnnext');
const backRef = document.querySelector('.ourteam__btnback');
const imgRef = document.querySelector('.ourteam__img');
const textRef = document.querySelector('.ourteam__text');
const subtextRef = document.querySelector('.ourteam__subtext');
const stripesRef = document.querySelectorAll('.ourteam__stripe');

const teamData = [
  {
    img: ostap,
    text: 'Остап Сушко',
    subtext: 'Тімлід',
  },
  {
    img: matvey,
    text: 'Матвій Присяжнюк',
    subtext: 'Скраммайстер',
  },
  {
    img: andrew,
    text: 'Андрій Лопушинський',
    subtext: 'Розробник сайту',
  },
  {
    img: volodya,
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
