import Swiper, { Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export const lastNewsSwiper = new Swiper('.latest-news__swiper', {
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
      slidesPerView: 3,
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
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    visible: true,
  },
});
