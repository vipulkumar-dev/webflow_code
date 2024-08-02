document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  // gsap code here!
});

console.log("gsap working!");

let treatment_block_height =
  document.querySelector(".treatment_block").offsetHeight;

console.log(treatment_block_height);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin_trigger",
    markers: true,
    pin: true, // pin the trigger element while active
    start: "top 13%", // when the top of the trigger hits the top of the viewport
    end: `+=${treatment_block_height} 13%`, // end after scrolling 500px beyond the start
    scrub: 0.1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // snap: {
    //   snapTo: "labels", // snap to the closest label in the timeline
    //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    // },
  },
});

// An array of elements or selectors you want to animate
let elements = document.querySelectorAll(".treatment_content_wrapper");
document.querySelector(".treatment_wrapper").style.height = `${
  elements[elements.length - 1].offsetHeight
}px`;

let treatment_title = document.querySelectorAll(".treatment_title");

tl.set(treatment_title[0].querySelector(".icon_arrow"), {
  // duration: 1,
  backgroundColor: `black`,
  color: `white`,
  // Example: Move each element further along the x-axis
  // opacity: 0, // Example: Fade in each element
  // delay: index * 0.2, // Example: Stagger the animations
});

tl.set(treatment_title[0].querySelector(".treatment_description"), {
  display: "block",
  // Example: Move each element further along the x-axis
  // opacity: 0, // Example: Fade in each element
  // delay: index * 0.2, // Example: Stagger the animations
  ease: "linear",
});

// Loop over the elements and add tweens to the timeline

let prev = 0;
let next = 0;
const MARGIN = 30;
elements.forEach((element, index) => {
  if (index !== elements.length - 1) {
    tl.to(treatment_title[index].querySelector(".icon_arrow"), {
      duration: 0.001,
      backgroundColor: `white`,
      color: `black`,
      // Example: Move each element further along the x-axis
      // opacity: 0, // Example: Fade in each element
      // delay: index * 0.2, // Example: Stagger the animations
      ease: "linear",
    });

    tl.to(treatment_title[index].querySelector(".treatment_description"), {
      duration: 0.001,
      display: "none",
      // Example: Move each element further along the x-axis
      // opacity: 0, // Example: Fade in each element
      // delay: index * 0.2, // Example: Stagger the animations
      ease: "linear",
    });

    tl.to(treatment_title[index + 1].querySelector(".icon_arrow"), {
      duration: 0.001,
      backgroundColor: `black`,
      color: `white`,
      // Example: Move each element further along the x-axis
      // opacity: 0, // Example: Fade in each element
      // delay: index * 0.2, // Example: Stagger the animations
      ease: "linear",
    });

    tl.to(treatment_title[index + 1].querySelector(".treatment_description"), {
      duration: 0.001,
      display: "block",
      // Example: Move each element further along the x-axis
      // opacity: 0, // Example: Fade in each element
      // delay: index * 0.2, // Example: Stagger the animations
      ease: "linear",
    });

    prev = next;
    next = next + element.offsetHeight + MARGIN;

    tl.fromTo(
      ".treatment_block",
      {
        // duration: 1,
        y: `-${prev}px`, // Example: Move each element further along the x-axis
        // opacity: 0, // Example: Fade in each element
        // delay: index * 0.2, // Example: Stagger the animations
      },
      {
        duration: 1,
        y: `-${next}px`,
        ease: "linear",
      }
    );
  }
});
