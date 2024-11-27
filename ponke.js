animation();

function animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_howtobuy", // selector or element
      start: "top top", // [trigger] [scroller] positions
      end: window.innerWidth > 1024 ? "+=1900" : "+=2500", // [trigger] [scroller] positions
      // or relative amount: "+=500"
      scrub: window.innerWidth > 1024 ? 0.8 : true, // or time (in seconds) to catch up
      pin: true, // or selector or element to pin
      markers: true,

      snap:
        window.innerWidth > 1024
          ? false
          : {
              snapTo: 1 / 3, // progress increment
              // or "labels" or function or Array
              duration: 2,
              directional: true,
              ease: "power2",
              inertia: false,
              delay: 0,
              // other callbacks: onStart, onInterrupt
            },
      // onUpdate: (self) => {
      //   // Force discrete section changes
      //   const progress = Math.round(self.progress * 3) / 3;
      //   if (self.progress !== progress) {
      //     self.scroll(self.start + (self.end - self.start) * progress);
      //   }
      // },
      // snap: {
      //   snapTo: "labels",
      //   duration: 0.5,
      //   directional: false,
      //   ease: "power2",
      // },
      // onSnapComplete: (self) => {
      //   console.log(self.animation.currentLabel());
      //   gsap.to(window, {
      //     scrollTo: tl.scrollTrigger.labelToScroll("panel3"),
      //   });
      // },
    },
    defaults: {
      // children inherit these defaults
      duration: 1,
      ease: "power2.inOut",
    },
  });

  const Number_of_step = 3;

  for (let i = 1; i <= Number_of_step; i++) {
    tl.to(".step_content", {
      x: `-${i * 100}%`,
    });

    tl.to(
      `.step_number._${i + 1}`,
      {
        color: "#ffb000",
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.to(
      `.step_number._${i}`,
      {
        color: "#bcbcbc",
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.to(
      `.step_image._${i + 1}`,
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.to(
      `.step_image._${i}`,
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.to(`.step_content`, {
      duration: window.innerWidth > 1024 ? 0.5 : 1,
      ease: "none",
    });
  }

  setTimeout(() => {
    tl.scrollTrigger.refresh();
  }, 1000);

  // Define the infinite animation timeline
  const infiniteAnim = gsap.timeline({
    repeat: -1, // Infinite loop
    onReverseComplete: () => {
      // We don't need to manually reverse, just continue the loop after reverse
      infiniteAnim.time(infiniteAnim.duration());

      infiniteAnim.reverse();
      console.log("reversed complete");
    },
  });

  // Basic animation
  infiniteAnim.to(".infinity_marquee", {
    rotate: 41,
    duration: 70,
    ease: "none",
  });

  // Variable to track scroll direction
  let lastScrollTop = 0;

  // Event listener for scroll
  window.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      infiniteAnim.play();
    } else {
      infiniteAnim.reverse();
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll value
  });

  gsap.to(".economics_data", {
    textContent: 555555555,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 11111111 },
    onUpdate: function () {
      this.targets()[0].innerHTML = numberWithCommas(
        Math.ceil(this.targets()[0].textContent)
      );
    },
    scrollTrigger: {
      trigger: ".economics_data", // selector or element
      start: "top 90%",
      toggleActions: "play pause resume reset",
      // markers: true,
    },
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  gsap.to(".rotate_button", {
    rotate: 5.2,
    duration: 0.3,
    ease: Power2.easeIn,
    scrollTrigger: {
      trigger: ".rotate_button",
      end: "top top", // selector or element
      start: "top 80%",
      toggleActions: "play pause resume reset",
      //    // markers: true,
    },
  });

  gsap.fromTo(
    ".footer_monkey",
    {
      y: "100%",
    },
    {
      y: "0%",
      // rotate: 90,
      scrollTrigger: {
        trigger: ".footer_card", // selector or element
        start: "bottom bottom",
        toggleActions: "restart none reverse none",
        end: "top 90%",
        // markers: true,
      },
    }
  );
}

document.querySelector(".copy_button").addEventListener("click", function (e) {
  const target = e.currentTarget;
  target
    .querySelectorAll(".btn-txt")
    .forEach((element) => (element.textContent = "Copied!"));
  setTimeout(function () {
    target
      .querySelectorAll(".btn-txt")
      .forEach((element) => (element.textContent = "Copy Address"));
  }, 1000);
});

// Function to convert vh-based sections to fixed height
function convertVhToFixedHeight() {
  // Select all sections with vh-based heights (adjust selector as needed)
  const sections = document.querySelectorAll("[data-vh-section]");

  sections.forEach((section) => {
    // Get computed height of the section
    const computedHeight = section.offsetHeight;

    // Set the fixed height in pixels
    section.style.height = `${computedHeight}px`;
    section.style.minHeight = "unset"; // To override any min-height
  });
}

// Run the function after the page loads
document.addEventListener("DOMContentLoaded", function () {
  convertVhToFixedHeight();

  const defaultSliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    centeredSlides: true,
    speed: 300,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is >= 320px
      1250: {
        slidesPerView: 3.2,
        spaceBetween: 18,
      },
      835: {
        slidesPerView: 2.8,
        spaceBetween: 18,
      },

      // when window width is >= 480px
      580: {
        slidesPerView: 2.2,
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

  const swiper = new Swiper(".swiper", {
    ...defaultSliderSettings,
    ...{
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
        },
      },
    },
  });

  swiper.on("slideChange", function () {
    const activeSlide =
      swiper.slides[swiper.activeIndex]?.querySelector(".insta_embed");

    let prev =
      swiper.slides[swiper.activeIndex - 1]?.querySelector(".insta_embed");
    let next =
      swiper.slides[swiper.activeIndex + 1]?.querySelector(".insta_embed");

    let prevmore =
      swiper.slides[swiper.activeIndex - 2]?.querySelector(".insta_embed");
    let nextmore =
      swiper.slides[swiper.activeIndex + 2]?.querySelector(".insta_embed");

    const parameters = {
      duration: 0.01,
    };

    gsap.to(activeSlide, {
      x: "0rem",
      scale: 1.05,
      ...parameters,
    });

    gsap.to([prev, next], { x: "0rem", scale: 0.95, ...parameters });

    gsap.to(nextmore, {
      x: "-2.3rem",
      scale: 0.85,
      ...parameters,
    });

    gsap.to(prevmore, {
      x: "2.3rem",
      scale: 0.85,
      ...parameters,
    });
  });
});

//window.addEventListener("resize", convertVhToFixedHeight);
