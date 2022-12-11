const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const menu = document.querySelector('.menu');
const footer = document.querySelector('.footer');
const pageBody = document.querySelector('.page__body');
const scrollbarDrag = document.querySelector('.swiper-scrollbar');
const logo = document.querySelector('.header__logo');
const heroTitleBlack = document.querySelector('.hero__title_black');
const heroTitleBlue = document.querySelector('.hero__title_blue');
const body = document.getElementsByTagName('body')[0];

const switcher = document.querySelectorAll('.switcher');
const heroParagrah = document.querySelectorAll('.hero__paragraph');
const heroHeadline = document.querySelectorAll('.hero__headline');
const underline = document.querySelectorAll('.underline');
const latestNewsCardHeadline = document.querySelectorAll(
  '.latest-news__card_headline'
);
const latestNewsHeadline = document.querySelector('.latest-news__headline');
const latestNewsCardParagraph = document.querySelectorAll(
  '.latest-news__card_paragraph'
);
const latestNewsCard = document.querySelectorAll('.latest-news__card');
const notificationHeadline = document.querySelector('.notification__headline');
const buttonForm = document.querySelector('.button__form');
const footerBottom = document.querySelector('.footer__bottom');
const menuItemLink = document.querySelectorAll('.menu-item__link');
const menuContactUsTitle = document.querySelector('.menu__contact-us__title');
const menuInforamtionBlockTitle = document.querySelectorAll(
  '.menu__inforamtion-block_title'
);

const headerInforamtionBlockTitle = document.querySelector(
  '.header__inforamtion-block_title'
);
const iconSocialNav = document.querySelectorAll('.icon__social-nav');

let isDark = false;

function changeColorToWhite(...elements) {
  elements.map((element) => (element.style.color = 'white'));
}

function changeBackgroundToWhite(...elements) {
  elements.map((element) => (element.style.background = 'white'));
}

function removeWhiteColor(...elements) {
  elements.map((element) => (element.removeAttribute('style')));
}

function removeBackgroundWhite(...elements) {
  elements.map((element) => (element.removeAttribute('style')));
}

[...switcher].map((
  commutator
) => commutator.addEventListener('click', function() {
  isDark = !isDark;

  if (isDark) {
    [...switcher].map((el) => el.classList.add('theme-switcher__dark'));
    [...switcher].map((el) => el.classList.remove('theme-switcher__light'));
    [...iconSocialNav].map((el) => el.classList.add('icon__social-nav--dark'));
    [...heroParagrah].map((el) => el.classList.add('hero__paragraph--night'));
    [...heroHeadline].map((el) => el.classList.add('hero__headline--night'));
    buttonForm.classList.add('button__form--blue');
    footer.classList.add('footer--dark-theme');
    footerBottom.classList.add('footer__bottom--dark-theme');
    menu.classList.add('menu--dark');
    scrollbarDrag.classList.add('swiper-scrollbar--night');
    menuOpener.classList.add('header__menu-opener--dark');
    menuCross.classList.add('menu__cross--dark');

    [...latestNewsCard].map((el) => el.classList.add(
      'latest-news__card--night'
    ));

    body.style.background = '#101010';

    pageBody.classList.add('page__body--black');
    heroTitleBlue.classList.add('hero__title_blue--black');
    [...latestNewsCard].map((el) => (el.style.background = '#272727'));
    [...latestNewsCard].map((el) => (el.style.border = '1px solid white'));

    changeBackgroundToWhite(
      ...underline
    );

    changeColorToWhite(
      logo,
      heroTitleBlack,
      latestNewsHeadline,
      notificationHeadline,
      menuContactUsTitle,
      headerInforamtionBlockTitle,
      ...latestNewsCardHeadline,
      ...latestNewsCardParagraph,
      ...menuItemLink,
      ...menuInforamtionBlockTitle,
    );
  } else {
    [...switcher].map((el) => el.classList.add('theme-switcher__light'));
    [...switcher].map((el) => el.classList.remove('theme-switcher__dark'));

    [...heroParagrah].map(
      (el) => el.classList.remove('hero__paragraph--night')
    );

    [...heroHeadline].map((el) => el.classList.remove('hero__headline--night'));

    buttonForm.classList.remove('button__form--blue');
    footer.classList.remove('footer--dark-theme');
    footerBottom.classList.remove('footer__bottom--dark-theme');
    menu.classList.remove('menu--dark');

    [...iconSocialNav].map(
      (el) => el.classList.remove('icon__social-nav--dark')
    );

    [...latestNewsCard].map(
      (el) => el.classList.remove('latest-news__card--night')
    );

    menuOpener.classList.remove('header__menu-opener--dark');
    menuCross.classList.remove('menu__cross--dark');
    scrollbarDrag.classList.remove('swiper-scrollbar--night');
    body.removeAttribute('style');

    pageBody.classList.remove('page__body--black');
    heroTitleBlue.classList.remove('hero__title_blue--black');
    logo.classList.remove('header__logo--white');
    heroTitleBlack.classList.remove('hero__title_black--black');
    [...latestNewsCard].map((el) => (el.style.background = 'white'));
    [...latestNewsCard].map((el) => (el.style.border = '1px solid #101010'));

    removeBackgroundWhite(
      ...underline,
    );

    removeWhiteColor(
      logo,
      heroTitleBlack,
      latestNewsHeadline,
      notificationHeadline,
      menuContactUsTitle,
      headerInforamtionBlockTitle,
      ...latestNewsCardHeadline,
      ...latestNewsCardParagraph,
      ...menuItemLink,
      ...menuInforamtionBlockTitle,
    );
  }
}));
