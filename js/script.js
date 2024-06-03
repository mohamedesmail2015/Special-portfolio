// main_swiper
const main_swiper = new Swiper(".main-slider .swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

main_swiper.on("slideChange", function () {
  new WOW().init();
});

const adv_swiper = new Swiper(".advertisment .swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
