import '../scss/main.scss';
import '../assets/hero_640.mp4';
import '../assets/doctor_640.jpg';
import '../assets/doctor2_640.jpg';
import '../assets/doctor3_640.jpg';

const hamburgerElement = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburgerElement.addEventListener('click', () => {
  hamburgerElement.classList.toggle('open');
  navigation.classList.toggle('navigation--show');
});
