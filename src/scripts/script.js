/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

new WOW().init();

const menu = document.querySelector('.main-nav');
const navList = document.querySelector('.main-nav__list');
const navLinks = document.querySelectorAll('.main-nav__link');
const toggler = document.querySelector('.toggler');

// addAnimationOnScroll();

window.addEventListener('scroll', changeOnScroll);

// Smooth scroll and dots
navList.addEventListener('click', function(event) {
  event.preventDefault();

  const active = document.querySelector('.main-nav__item--active');
  const mobileModale = document.querySelector('.mobile');
  const anchor = event.target;

  if (active) {
    active.classList.remove('main-nav__item--active');
  }
  anchor.parentElement.classList.add('main-nav__item--active');

  const sectionId = anchor.getAttribute('href');

  if (mobileModale) {
    menu.classList.remove('mobile');
    toggler.checked = false;
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  } else {
    window.removeEventListener('scroll', changeOnScroll);
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
});

// Adding class with CSS styles to mobile menu on click
toggler.addEventListener('click', function() {
  const mediaQueries = 'screen and (min-device-width: 320px) and (max-device-width: 600px)';
  const matched = window.matchMedia(mediaQueries).matches;

  // Check for media queries and active hamburger menu
  if (matched && toggler.checked) {
    menu.classList.toggle('mobile');
  } else {
    menu.classList.remove('mobile');
  }
});

// Slick slider for header
$(document).ready(function() {
  $('.header').slick({
    dots: true,
    arrows: false,
    autoplay: true,
  });
});

// Slick slider for News section
$(document).ready(function() {
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

// Change styles of menu on scroll
function changeOnScroll() {
  const distanceFromTop = this.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (section.offsetTop <= distanceFromTop
      && section.offsetTop + section.offsetHeight > distanceFromTop) {
      link.parentElement.classList.add('main-nav__item--active');
    } else {
      link.parentElement.classList.remove('main-nav__item--active');
    }
  });

  if (this.scrollY >= 20) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
}
