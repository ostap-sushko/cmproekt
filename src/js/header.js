import night from "../img/slider-night.png"
import day from "../img/slider-day.png"

const sliderRef = document.querySelector('.header__sliderimg');
sliderRef.addEventListener('click', () => {
  if (sliderRef.src.includes('slider-day.png')) {
    sliderRef.src = night;
  } else {
    sliderRef.src = day;
  }
});
