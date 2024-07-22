const linkHome = document.querySelector('[data-link-home]');
const linkPortfolio = document.querySelector('[data-link-portfolio]');
const linkContacts = document.querySelector('[data-link-contacts]');

const onChangeCurrentLink = () => {
  // const currentPath = window.location.pathname;

  const basePath = '/expl_web_studio';
  const fullPath = window.location.pathname; // "/expl_web_studio/portfolio.html"
  const currentPath = fullPath.replace(basePath, '').toLowerCase(); // "portfolio.html"

  const currentLink = document.querySelectorAll('.current');

  if (currentLink) {
    currentLink.forEach(el => el.classList.remove('current'));
  }

  switch (true) {
    case currentPath.endsWith('studio.html'):
      linkHome.classList.add('current');
      break;
    case currentPath.endsWith('portfolio.html'):
      linkPortfolio.classList.add('current');
      break;
    case currentPath.endsWith('contacts.html'):
      linkContacts.classList.add('current');
      break;
    default:
      linkHome.classList.add('current');
  }
};

onChangeCurrentLink();
