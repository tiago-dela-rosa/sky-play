import Swiper from "https://unpkg.com/swiper/js/swiper.esm.browser.bundle.min.js";

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
  slidesPerView: 6,
  slidesPerGroup: 6,
  height: 200,
  slidesOffsetBefore: 0,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
