window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector(".nav_component").classList.add("active");
  } else {
    document.querySelector(".nav_component").classList.remove("active");
  }
});

// use a script tag or an external JS file

const defaultSliderSettings = {
  slidesPerView: 1.2,
  spaceBetween: 16,
  loop: false,

  breakpoints: {
    // when window width is >= 320px
    1250: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    },
    835: {
      slidesPerView: 2.2,
      spaceBetween: 18,
    },

    // when window width is >= 480px
    580: {
      slidesPerView: 1.2,
      spaceBetween: 18,
    },
    // when window width is >= 640px
  },
  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  // Navigation arrows
};

window.addEventListener("load", (event) => {
  const swiper = new Swiper(".swiper", {
    ...defaultSliderSettings,
    ...{
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    },
  });
});
