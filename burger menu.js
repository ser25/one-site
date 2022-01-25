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