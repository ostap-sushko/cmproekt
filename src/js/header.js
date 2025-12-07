import sun from '../img/sun-slider.png';
import night from '../img/night-slider.png';

const contRef = document.querySelector('.header__containerslider');
const boxRef = document.querySelector('.header__sliderbox');
const sliderRef = document.querySelector('.header__slider');

contRef.addEventListener('click', () => {
  contRef.classList.toggle('active-slider');
  if (contRef.classList.contains('active-slider')) {
    sliderRef.src = night;
  } else {
    sliderRef.src = sun;
  }
});
