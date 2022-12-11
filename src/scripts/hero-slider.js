'use strict';

const arrowRight = document.querySelector('.hero__slider_button-next');
const arrowLeft = document.querySelector('.hero__slider_button-prev');
const numberFirst = document.querySelector('.hero__slider_pagination--fist');
const sections = document.querySelectorAll('.hero__slider_slide');

let counter = 0;

arrowRight.addEventListener('click', function() {
  if (counter < sections.length - 1) {
    counter += 1;
    sections[counter].classList.add('hero__slider--active');
    sections[counter - 1].classList.remove('hero__slider--active');
    numberFirst.textContent = counter + 1;
  }
});

arrowLeft.addEventListener('click', function() {
  if (counter > 0) {
    sections[counter].classList.remove('hero__slider--active');
    sections[counter - 1].classList.add('hero__slider--active');
    counter -= 1;
    numberFirst.textContent = counter + 1;
  }
});
