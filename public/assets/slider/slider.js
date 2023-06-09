/**
 * Clients untuk HomePage
 */
new Swiper(".clients-slider", {
  speed: 500,
  loop: true,
  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 3,
    },
  },
});
