function changeOuterLinks() {
  const nav = document.querySelector('nav#link-list');
  const linksArray = Array.from(nav.querySelectorAll('a'));

  linksArray.filter((link) => link.innerHTML.includes('outer-link'))
    .forEach((outerLink) => {
      // eslint-disable-next-line no-param-reassign
      outerLink.target = '_blank';
      // eslint-disable-next-line no-param-reassign
      outerLink.innerHTML = `<strong>${outerLink.innerHTML}</strong>`;
    });

  nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.width = '30%';
  nav.style.margin = '0 auto';
  nav.style.border = 'solid blue 1px';
  nav.style.padding = '16px';
}

changeOuterLinks();

// eslint-disable-next-line import/prefer-default-export
export { changeOuterLinks };
