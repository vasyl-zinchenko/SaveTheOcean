/* eslint-disable no-unused-vars */
// import * as preventSubmit from './prevent-submit';
// import * as scrollUpArrow from './scroll-up';
// import * as activeLink from './active-menu-link';
// import * as matchMedia from './match-media';
// import * as featureSlider from './feature-slider';

// preventSubmit();
// scrollUpArrow();
// activeLink();
// matchMedia();
// featureSlider();

import Swiper from 'swiper';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// import Swiper styles

const swiper = new Swiper('.hero-slider', {
  direction: 'horizontal',
});

const lastNewsSwiper = new Swiper('.latest-news__swiper', {
  // Optional parameters
  direction: 'horizontal',

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragClass: true,
  },
});
