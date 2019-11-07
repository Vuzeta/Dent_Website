import swal from 'sweetalert';
import '../scss/main.scss';
// import '../assets/hero_640.mp4';
import '../assets/doctor_640.jpg';
import '../assets/doctor2_640.jpg';
import '../assets/doctor3_640.jpg';

//HAMBURGER
const hamburgerElement = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const formInputs = [...document.querySelectorAll('.contact__form > *[data-name="form-element"]')];
const form = document.querySelector('.contact__form');

hamburgerElement.addEventListener('click', () => {
	hamburgerElement.classList.toggle('open');
	navigation.classList.toggle('navigation--show');
});

//PRICE SHOW
const priceItems = [...document.querySelectorAll('.price__wrapper-list-item')];
priceItems.forEach(item => {
	item.addEventListener('click', function(e) {
		this.classList.toggle('price__wrapper-list-item--show');

		const itemHeight = this.clientHeight;
		const tableHeight = this.querySelector('.price__wrapper-table').clientHeight;
		const icon = item.querySelector('.price__icon');
		const headerHeight = item.querySelector('.price__wrapper-list-col').clientHeight;

		if (item.classList.contains('price__wrapper-list-item--show')) {
			icon.style.transform = 'scale(-1)';
			item.style.height = `${tableHeight + itemHeight}px`;
		} else {
			icon.style.transform = 'scale(1)';
			item.style.height = `${headerHeight}px`;
		}
	});
});

//Form remove placeholder on focus
formInputs.forEach(input => {
	input.addEventListener('focus', function(e) {
		const valueBefore = e.target.placeholder;
		e.target.placeholder = '';
		input.addEventListener('blur', function(e) {
			e.target.placeholder = valueBefore;
		});
	});
});

form.addEventListener('submit', e => {
	e.preventDefault();

	swal({
		text: 'Wiadomość wysłano',
		buttons: false,
		icon: 'success',
		timer: 2000,
	});
	formInputs.forEach(input => (input.value = ''));
});
