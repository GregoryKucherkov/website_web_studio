const linkHome = document.querySelector('[data-link-home]');
const linkPortfolio = document.querySelector('[data-link-portfolio]');
const linkContacts = document.querySelector('[data-link-contacts]');

const onChangeCurrentLink = () => {
  const currentPath = window.location.pathname;

  const currentLink = document.querySelectorAll('.current');

  if (currentLink) {
    currentLink.forEach(el => el.classList.remove('current'));
  }

  switch (true) {
    case currentPath.includes('studio'):
      linkHome.classList.add('current');
      break;
    case currentPath.includes('portfolio'):
      linkPortfolio.classList.add('current');
      break;
    case currentPath.includes('contacts'):
      linkContacts.classList.add('current');
      break;
    default:
      linkHome.classList.add('current');
  }
};

onChangeCurrentLink();
