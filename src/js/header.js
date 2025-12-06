const sliderRef = document.querySelector('.header__sliderimg');
sliderRef.addEventListener('click', () => {
  if (sliderRef.src.includes('slider-day.png')) {
    sliderRef.src = 'img/slider-night.png';
  } else {
    sliderRef.src = 'img/slider-day.png';
  }
});
