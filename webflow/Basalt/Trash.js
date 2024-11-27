const navbar = document.querySelector(".nav_component");

const hero_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_hero", // selector or element
    start: "top top", // [trigger] [scroller] positions
    end: "50% top",
    scrub: 0.5,
    pin: true,
    onUpdate: (self) => {
      if (self.progress > 0.3) {
        navbar.classList.add("transparent");
      } else {
        navbar.classList.remove("transparent");
      }
    },
    onLeave: () => {
      navbar.classList.remove("transparent");
    },
  },
  defaults: {
    ease: "linear",
  },
});

hero_tl
  .fromTo(".hero_content", { opacity: 1 }, { opacity: 0, y: "-10%" })
  .to(".hero_contain", { height: "100vh", padding: "0px" }, "<")
  .to(".hero_contain", { duration: 2 });
