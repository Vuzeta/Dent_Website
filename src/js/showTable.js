const showTable = item => {
  const itemHeight = item.clientHeight;
  const tableHeight = item.querySelector('.price__wrapper-table').clientHeight;
  const icon = item.querySelector('.price__icon');
  const headerHeight = item.querySelector('.price__wrapper-list-col').clientHeight;
  const itemSpec = item.getAttribute('data-spec');
  const listShowsTabs = document.querySelectorAll('.price__wrapper-list-item--show');

  item.classList.toggle('price__wrapper-list-item--show');

  if (item.classList.contains('price__wrapper-list-item--show')) {
    icon.style.transform = 'scale(-1)';
    item.style.height = `${tableHeight + itemHeight}px`;
    checkTabs(listShowsTabs, headerHeight);
    checkIcon(itemSpec);
  } else {
    icon.style.transform = 'scale(1)';
    item.style.height = `${headerHeight}px`;
    checkIcon();
  }
};

const checkIcon = (itemSpec = 'arrow-left') => {
  const icon = document.querySelector('.price__spec-icon');
  icon.style.backgroundImage = `url(./assets/${itemSpec}.svg)`;
};

const checkTabs = (listShowsTabs, headerHeight) => {
  if (listShowsTabs.length > 0) {
    listShowsTabs[0].style.height = `${headerHeight}px`;
    listShowsTabs[0].querySelector('.price__icon').style.transform = 'scale(1)';
    listShowsTabs[0].classList.remove('price__wrapper-list-item--show');
  }
};

export default showTable;
