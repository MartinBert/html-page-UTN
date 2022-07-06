'use strict'
import helpers from '../helpers/index.js'

const {fetchHtml} = helpers.componentManager;
const {waitDOM} = helpers.DOMMutationsDetector;

waitDOM('.carousel-languages')
.then(carouselLanguages => {
  fetchHtml('../../sections/languages/carousel-languages.html')
  .then(html => {
    carouselLanguages.innerHTML = html;
    let slideIndex = 1;
  
    const plusSlides = (n) => {
      showSlides(slideIndex += n);
    }
    
    const showSlides = (n) => {
      let i;
      let slides = document.getElementsByClassName("carouselItem");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slides[slideIndex-1].style.display = "block";
    }
  
    document.querySelector('.prev').addEventListener('click', () => {
      plusSlides(-1)
    })
    document.querySelector('.next').addEventListener('click', () => {
      plusSlides(1)
    })
    showSlides(slideIndex);
  })
})
