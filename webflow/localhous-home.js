console.log("home js working!");
console.log("home js working!");

const defaultSliderSettings = {
  slidesPerView: 1.4,
  spaceBetween: 16,
  loop: false,

  breakpoints: {
    // when window width is >= 320px
    1250: {
      slidesPerView: 3.8,
      spaceBetween: 32,
    },
    // when window width is >= 480px
    479: {
      slidesPerView: 2.8,
      spaceBetween: 20,
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
  const swiper_category = new Swiper(".swiper_category", {
    ...defaultSliderSettings,
    ...{
      navigation: {
        nextEl: ".swiper_category-button-next",
        prevEl: ".swiper_category-button-prev",
      },
    },
  });

  const swiper_exp = new Swiper(".swiper_exp", {
    ...defaultSliderSettings,
    ...{
      navigation: {
        nextEl: ".swiper_exp-button-next",
        prevEl: ".swiper_exp-button-prev",
      },
    },
  });

  const swiper_blog = new Swiper(".swiper_blog", {
    ...defaultSliderSettings,
    ...{
      navigation: {
        nextEl: ".swiper_blog-button-next",
        prevEl: ".swiper_blog-button-prev",
      },
    },
  });
});
