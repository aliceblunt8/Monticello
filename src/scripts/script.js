/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const menu = document.querySelector('.main-nav');
const navList = document.querySelector('.main-nav__list');
const navLinks = document.querySelectorAll('.main-nav__link');
const toggler = document.querySelector('.toggler');

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
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
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

// Google API map
let map;

function initMap() {
  const brooklyn = {
    lat: 40.730, lng: -73.935,
  };
  const mapMarker = {
    lat: 40.773, lng: -73.956,
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: brooklyn,
    zoom: 12,
    styles:
          [
            {
              'featureType': 'all',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'weight': '2.00',
                },
              ],
            },
            {
              'featureType': 'all',
              'elementType': 'geometry.stroke',
              'stylers': [
                {
                  'color': '#9c9c9c',
                },
              ],
            },
            {
              'featureType': 'all',
              'elementType': 'labels.text',
              'stylers': [
                {
                  'visibility': 'on',
                },
              ],
            },
            {
              'featureType': 'landscape',
              'elementType': 'all',
              'stylers': [
                {
                  'color': '#f2f2f2',
                },
              ],
            },
            {
              'featureType': 'landscape',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#ffffff',
                },
              ],
            },
            {
              'featureType': 'landscape.man_made',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#ffffff',
                },
              ],
            },
            {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'off',
                },
              ],
            },
            {
              'featureType': 'road',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': -100,
                },
                {
                  'lightness': 45,
                },
              ],
            },
            {
              'featureType': 'road',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#eeeeee',
                },
              ],
            },
            {
              'featureType': 'road',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#7b7b7b',
                },
              ],
            },
            {
              'featureType': 'road',
              'elementType': 'labels.text.stroke',
              'stylers': [
                {
                  'color': '#ffffff',
                },
              ],
            },
            {
              'featureType': 'road.highway',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'simplified',
                },
              ],
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'visibility': 'off',
                },
              ],
            },
            {
              'featureType': 'transit',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'off',
                },
              ],
            },
            {
              'featureType': 'water',
              'elementType': 'all',
              'stylers': [
                {
                  'color': '#46bcec',
                },
                {
                  'visibility': 'on',
                },
              ],
            },
            {
              'featureType': 'water',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#c8d7d4',
                },
              ],
            },
            {
              'featureType': 'water',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#070707',
                },
              ],
            },
            {
              'featureType': 'water',
              'elementType': 'labels.text.stroke',
              'stylers': [
                {
                  'color': '#ffffff',
                },
              ],
            },
          ],
  });

  const marker = new google.maps.Marker({
    position: mapMarker,
    map: map,
  });
}
