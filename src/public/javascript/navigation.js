const navHomeElements = document.querySelectorAll('.navHome');
const navSearchElements = document.querySelectorAll('.navSearch');
const navItemHome = document.querySelector('.navItemHome');
const navItemSearch = document.querySelector('.navItemSearch');
const navIconHome = document.querySelector('.navIconHome');
const navIconSearch = document.querySelector('.navIconSearch');

navHomeElements.forEach(element => {
    element.addEventListener('click', homeClick);
  });
  
  navSearchElements.forEach(element => {
    element.addEventListener('click', searchClick);
  });
  
  function handleNavHover(element, iconElement, itemElement, hoverClass) {
    element.addEventListener('mouseenter', () => {
      iconElement.classList.add(hoverClass);
      itemElement.classList.add(hoverClass);
    });
  
    element.addEventListener('mouseleave', () => {
      iconElement.classList.remove(hoverClass);
      itemElement.classList.remove(hoverClass);
    });
  }
  
  function homeClick() {
    navHomeElements.forEach(element => {
      element.classList.add('homeClick');
    });
    navSearchElements.forEach(element => {
      element.classList.remove('searchClick');
    });
  
    handleNavHover(navItemSearch, navIconSearch, navItemSearch, 'searchHover');
  }
  
  function searchClick() {
    navHomeElements.forEach(element => {
      element.classList.remove('defaultHome');
      element.classList.remove('homeClick');
    });
    navSearchElements.forEach(element => {
      element.classList.add('searchClick');
    });
  
    handleNavHover(navItemHome, navIconHome, navItemHome, 'homeHover');
  
  }