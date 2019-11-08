const showTable = item => {
	const itemHeight = item.clientHeight;
	const tableHeight = item.querySelector('.price__wrapper-table').clientHeight;
	const icon = item.querySelector('.price__icon');
	const headerHeight = item.querySelector('.price__wrapper-list-col').clientHeight;
	item.classList.toggle('price__wrapper-list-item--show');

	if (item.classList.contains('price__wrapper-list-item--show')) {
		icon.style.transform = 'scale(-1)';
		item.style.height = `${tableHeight + itemHeight}px`;
	} else {
		icon.style.transform = 'scale(1)';
		item.style.height = `${headerHeight}px`;
	}
};

export default showTable;
