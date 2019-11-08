const changeHero = device => {
	const heroElement = document.querySelector('.hero__video source');
	const path = './assets/';
	const videos = ['dental_1280', 'dental_1920'];

	if (device === 'tablet') {
		heroElement.setAttribute('src', `${path}${videos[0]}.mp4`);
	}

	if (device === 'desktop') {
		heroElement.setAttribute('src', `${path}${videos[1]}.mp4`);
	}
};

export default changeHero;
