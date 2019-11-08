const formSubmit = (e, inputs) => {
	e.preventDefault();
	swal({
		text: 'Wiadomość wysłano',
		buttons: false,
		icon: 'success',
		timer: 2000,
	});
	inputs.forEach(input => (input.value = ''));
};

export default formSubmit;
