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

// const lastNewsSwiper = new Swiper('.latest-news__swiper', {
//   // Optional parameters
//   direction: 'horizontal',

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//     dragClass: true,
//   },
// });

const lastNewsSwiper = new Swiper('.latest-news__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },

    375: {
      slidesPerView: 1.21,
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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// const cardSwiper = new Swiper('.latest-news__swiper', {
//   loop: false,
//   autoHeight: false,
//   spaceBetween: 10,
//   breakpoints: {
//     375: {
//       slidesPerView: 1.2,
//       spaceBetween: 24,
//     },
//     400: {
//       slidesPerView: 1.5,
//       spaceBetween: 16,
//     },
//     500: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     600: {
//       slidesPerView: 2.5,
//       spaceBetween: 16,
//     },
//     768: {
//       slidesPerView: 3.2,
//       spaceBetween: 16,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 16,
//     },
//     1366: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//     },
//     1696: {
//       slidesPerView: 4,
//       spaceBetween: 32,
//     },
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//     dragClass: true,
//   },
// });
