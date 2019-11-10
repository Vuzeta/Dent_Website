import swal from 'sweetalert';
import showHamburger from './hamburger';
import showTable from './showTable';
import formSubmit from './formSubmit';
import changeHero from './changeHero';
import jump from 'jump.js';

import '../scss/main.scss';
import '../assets/doctor1_1280.jpg';
import '../assets/doctor2_1280.jpg';
import '../assets/doctor3_1280.jpg';
import '../assets/dental_960.mp4';
import '../assets/dental_1280.mp4';
import '../assets/dental_1920.mp4';

const hamburgerElement = document.querySelector('.hamburger');
const priceItems = [...document.querySelectorAll('.price__wrapper-list-item')];
const formInputs = [...document.querySelectorAll('.contact__form > *[data-name="form-element"]')];
const form = document.querySelector('.contact__form');
const navigation = document.querySelector('.navigation');
const links = [...document.querySelectorAll('.link')];

const screenWidth = screen.width;
const tabletLandWidth = 1024;
const desktopLandWidth = 1200;

hamburgerElement.addEventListener('click', () => showHamburger(hamburgerElement));
form.addEventListener('submit', e => formSubmit(e, formInputs));

priceItems.forEach(item => {
  item.addEventListener('click', () => {
    showTable(item, priceItems);
  });
});

formInputs.forEach(input => {
  input.addEventListener('focus', function(e) {
    const valueBefore = e.target.placeholder;
    e.target.placeholder = '';
    input.addEventListener('blur', function(e) {
      e.target.placeholder = valueBefore;
    });
  });
});

links.forEach(link =>
  link.addEventListener('click', function(e) {
    jump(`${e.target.hash}`, {
      duration: 900,
      offset: -70,
    });

    if (window.screen.availWidth < 1024) {
      showHamburger(hamburgerElement);
    }
  }),
);

if (screenWidth >= tabletLandWidth) {
  navigation.classList.remove('navigation--phone');
  navigation.classList.add('navigation--large');
  hamburgerElement.style.display = 'none';

  if (screenWidth >= tabletLandWidth && screenWidth < desktopLandWidth) {
    changeHero('tablet');
  }

  if (screenWidth >= desktopLandWidth) {
    changeHero('desktop');
  }
}
