 "use strict"
 new Swiper('.cook__slider', {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    slidesPerView: 3,
    autoHeight: true,
    autoplay: {
        delay: 3000,
      },
      //spaceBetween: 100,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        
        },
        // when window width is >= 480px
        730: {
          slidesPerView: 2,
          //spaceBetween: 30
        },
        // when window width is >= 640px
        1090: {
          slidesPerView: 3,
          //spaceBetween: 10
        }
      }

  
  },
);
new Swiper('.our-menu__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
 
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      //paceBetween: 20,
    
    },
    // when window width is >= 480px
    730: {
      slidesPerView: 2,
      //spaceBetween: 30
    },
    // when window width is >= 640px
    1090: {
      slidesPerView: 3,
      //spaceBetween: 10
    }
  }
});


 new Swiper('.reviews__slider', {
  
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});


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
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.getSelection('header').offsetHeight; 
      window.scroll({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();

    }

  }
}

//меню бургер 

const iconMenu = document.querySelector('.header__icon');
if (iconMenu){
  const navBar = document.querySelector('.nav-bar');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    navBar.classList.toggle('_active');
  });
}
