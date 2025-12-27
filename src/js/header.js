import sun from '../img/sun-slider.png';
import night from '../img/night-slider.png';

const contRef = document.querySelector('.header__containerslider');
const sliderRef = document.querySelector('.header__slider');
const containerRef = document.querySelectorAll('.container');
const modalRef = document.querySelector('.modal-header');
const allTextRef = document.querySelectorAll('h2');
const mainText = document.querySelector('h1');
const linkRef = document.querySelectorAll('a');
const pTextRef = document.querySelectorAll('p');
const spanText = document.querySelectorAll('span');
const svgRef = document.querySelector('path');
const modalFooter = document.querySelector('.modal-footer');

contRef.addEventListener('click', () => {
  contRef.classList.toggle('active-slider');
  if (contRef.classList.contains('active-slider')) {
    sliderRef.src = night;
    document.body.style.backgroundColor = '#333';
    modalRef.style.backgroundColor = '#444';
    modalFooter.style.backgroundColor = '#444';

    containerRef.forEach(el => el.classList.add('dark-mode'));
    allTextRef.forEach(el => (el.style.color = '#FFFFFF'));
    mainText.style.color = '#FFFFFF';
    linkRef.forEach(el => el.classList.add('linktag-white'));
    pTextRef.forEach(el => el.classList.add('linktag-white'));
    spanText.forEach(el => el.classList.add('linktag-white'));
    svgRef.style.stroke = '#FFFFFF';
  } else {
    sliderRef.src = sun;
    document.body.style.backgroundColor = '#FFFFFF';
    modalRef.style.backgroundColor = '#FFFFFF';
    modalFooter.style.backgroundColor = '#FFFFFF';

    containerRef.forEach(el => el.classList.remove('dark-mode'));
    allTextRef.forEach(el => (el.style.color = '#000'));
    mainText.style.color = '#000';
    linkRef.forEach(el => el.classList.remove('linktag-white'));
    pTextRef.forEach(el => el.classList.remove('linktag-white'));
    spanText.forEach(el => el.classList.remove('linktag-white'));
    svgRef.style.stroke = '#000';
  }
});
