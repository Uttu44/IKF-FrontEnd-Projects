jQuery(document).ready(function() {

    var sliderThumbnail = new Swiper('.slider-thumbnail', {
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    var slider = new Swiper('.slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: sliderThumbnail
      }
    });

// Swiper: Slider
    new Swiper('.updt-sec .swiper-container', {
        loop: false,
        nextButton: '.updt-sec .swiper-button-next',
        prevButton: '.updt-sec .swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1028: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
// Swiper: Slider
    new NewSwiper('.leadership-slider', {
        loop: false,
        nextButton: '.updt-sec .swiper-button-next',
        prevButton: '.updt-sec .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30
    });
});


document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 70, 3000);
 counter("count2", 0, 8, 3000);
 counter("count3", 0, 35, 3000);
counter("count4", 0, 12, 3000);
});
