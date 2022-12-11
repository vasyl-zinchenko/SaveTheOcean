/* eslint-disable no-unused-vars */
import './prevent-submit';
import './latest-news-slider';
import './them-switcher.js';
import './change-blur.js';
import './set-line-clamp';
import './hero-slider';
// import * as scrollUpArrow from './scroll-up';
// import * as activeLink from './active-menu-link';

const scrollbar = document.querySelector('.swiper-scrollbar');

scrollbar.style.height = '16px';
scrollbar.style.background = '#efefef';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
