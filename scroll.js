//Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e){
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top// + pageYOffset - document.getSelection('header').offsetHeight; 
      window.scroll({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();

    }

  }
}

const menuLinks1 = document.querySelectorAll('.main-block__link[data-goto]');
if (menuLinks1.length > 0){
    menuLinks1.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e){
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top// + pageYOffset - document.getSelection('header').offsetHeight; 
        window.scroll({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
  
      }
  
    }
  }