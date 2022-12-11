'use strict';

const paragraphs = document.querySelectorAll('.hero__paragraph');
const headers = document.querySelectorAll('.hero__headline');
let id = 0;

[...headers].map((header, index, arr) =>
  header.addEventListener('click', function() {
    id = index;

    [...headers].map((el) => {
      el.classList.remove('hero__headline--active');
    });

    headers[id].classList.add('hero__headline--active');

    [...paragraphs].map((el) => {
      el.classList.remove('hero__paragraph--active');
    });
    paragraphs[id].classList.add('hero__paragraph--active');
  }));
