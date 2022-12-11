const header = document.querySelector('.header');
const mainSection = document.querySelector('.main');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const footer = document.querySelector('.footer');
const menuItemLink = document.querySelectorAll('.menu-item__link');

let isBlur = false;

function changeBlur(...arg) {
  if (isBlur) {
    arg.map((el) => el.classList.add('blurBackground'));
  }

  if (!isBlur) {
    arg.map((el) => el.classList.remove('blurBackground'));
  }
}

menuOpener.addEventListener('click', function() {
  isBlur = true;
  changeBlur(header, mainSection, footer);
});

menuCross.addEventListener('click', function() {
  isBlur = false;
  changeBlur(header, mainSection, footer);
});

[...menuItemLink].map((link) => {
  return link.addEventListener('click', function() {
    isBlur = false;
    changeBlur(header, mainSection, footer);
  });
});
