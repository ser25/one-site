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


const offset = 1000;

const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
// updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffet = pathLength - (getTop() * pathLength / height);
  scrollUpSvgPath.style.strokeDashoffset = dashoffet;
};

// onScroll

window.addEventListener('scroll', () =>{
  updateDashoffset();

  if ( getTop() > offset ){
    scrollUp.classList.add('scroll-up--active')
      
  }else{
    scrollUp.classList.remove('scroll-up--active')

  }
});

// click

scrollUp.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

updateDashoffset();




