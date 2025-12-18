import sun from '../img/sun-slider.png';
import night from '../img/night-slider.png';

const contRef = document.querySelector('.header__containerslider');
const sliderRef = document.querySelector('.header__slider');
const containerRef = document.querySelectorAll('.container');
const modalRef = document.querySelector('.modal-header');
const allTextRef = document.querySelectorAll('h2');

contRef.addEventListener('click', () => {
  contRef.classList.toggle('active-slider');
  if (contRef.classList.contains('active-slider')) {
    sliderRef.src = night;
    document.body.style.backgroundColor = '#333';
    modalRef.style.backgroundColor = '#444';

    containerRef.forEach(el => el.classList.add('dark-mode'));
    allTextRef.forEach(el => (el.style.color = '#FFFFFF'));
  } else {
    sliderRef.src = sun;
    document.body.style.backgroundColor = '#FFFFFF';
    modalRef.style.backgroundColor = '#FFFFFF';

    containerRef.forEach(el => el.classList.remove('dark-mode'));
    allTextRef.forEach(el => (el.style.color = '#000'));
  }
});
