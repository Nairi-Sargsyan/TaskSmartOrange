'use strict';

const burgerBtn = document.querySelector('.navbar__burger'),
    header = document.querySelector('.header'),
    body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    body.classList.toggle('lock');
});