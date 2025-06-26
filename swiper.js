const tagline = document.querySelector('.tagline')
const btnClose = document.querySelector('.close')
const hover = document.querySelector('.card')
import {zapyskMenu} from './menu__mobile.js'
zapyskMenu()

btnClose.addEventListener('click', function() {
    tagline.remove()
})


const swiper = new Swiper('.swiper', {

  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
   
});


