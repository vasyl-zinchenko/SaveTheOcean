/* eslint-disable no-unused-vars */
// import * as preventSubmit from './prevent-submit';
// import * as scrollUpArrow from './scroll-up';
// import * as activeLink from './active-menu-link';
// import * as matchMedia from './match-media';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import Countable from 'countable';
import 'swiper/swiper-bundle.min.css';

import * as heroSlider from './hero-slider';

const header = document.querySelector('.header');
const mainSection = document.querySelector('.main');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const footer = document.querySelector('.footer');
const pageBody = document.querySelector('.page__body');
let isBlur = false;
const scrollbar = document.querySelector('.swiper-scrollbar');
const scrollbarDrag = document.querySelector('.swiper-scrollbar-drag');

scrollbar.style.height = '16px';
scrollbar.style.background = '#efefef';

if (scrollbarDrag) {
  scrollbarDrag.style.background = 'black';
}

function changeBlur(...arg) {
  if (isBlur) {
    arg.map((el) => el.classList.add('blurBackground'));
    pageBody.style.background = 'rgba(217, 217, 217, 0.3)';
  }

  if (!isBlur) {
    arg.map((el) => el.classList.remove('blurBackground'));
    pageBody.style.background = 'white';
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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const lastNewsSwiper = new Swiper('.latest-news__swiper', {
  modules: [Scrollbar],
  draggable: true,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },

    375: {
      slidesPerView: 1.13,
      spaceBetween: 24,
    },

    425: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },

    475: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },

    525: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },

    625: {
      slidesPerView: 2.1,
      spaceBetween: 24,
    },

    768: {
      slidesPerView: 3.15,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1696: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    visible: true,
  },
});

const headers = document.querySelectorAll('.latest-news__card_headline');
const newsCardText = document.getElementsByClassName(
  'latest-news__card_paragraph'
);

function getCountOfLine(element) {
  return Math.round(element.offsetHeight / 20);
}

function setLineClapm(element, count) {
  return element.setAttribute(
    'style',
    `display: -webkit-box; -webkit-line-clamp: ${count}`
  );
}

for (let i = 0; i < headers.length; i++) {
  if (getCountOfLine(headers[i]) === 1) {
    setLineClapm(newsCardText[i], 6);
  }

  if (getCountOfLine(headers[i]) === 2) {
    setLineClapm(newsCardText[i], 4);
  }

  if (getCountOfLine(headers[i]) === 3) {
    setLineClapm(newsCardText[i], 4);
  }

  if (getCountOfLine(headers[i]) === 4) {
    setLineClapm(newsCardText[i], 4);
  }

  if (getCountOfLine(headers[i]) === 5) {
    setLineClapm(newsCardText[i], 3);
  }

  if (getCountOfLine(headers[i]) === 6) {
    setLineClapm(newsCardText[i], 2);
  }
}
