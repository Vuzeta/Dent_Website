const navigation = document.querySelector('.navigation');

const showHamburger = hamburger => {
	hamburger.classList.toggle('open');
	navigation.classList.toggle('navigation--show');
};

export default showHamburger;
