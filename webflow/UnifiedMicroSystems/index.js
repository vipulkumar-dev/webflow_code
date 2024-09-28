const scrollContainer = document.querySelector(".collab-tab-menu");

document.querySelectorAll(".collab-tab-link").forEach((element) => {
  element.addEventListener("click", function () {
    // Check if both elements exist
    if (scrollContainer && element) {
      // Get the bounding rectangle of the element and the scroll container
      const elementRect = element.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();

      // Calculate the desired horizontal position to center the element in the scroll container
      const targetX =
        elementRect.left -
        containerRect.left +
        scrollContainer.scrollLeft +
        elementRect.width / 2 -
        containerRect.width / 2;

      // Smooth scroll horizontally to the target position
      scrollContainer.scrollTo({
        left: targetX,
        behavior: "smooth",
      });
    }
  });
});

function setWidths() {
  // Select all elements with the data-width attribute
  const elements = document.querySelectorAll("[data-width]");

  // Check if the viewport width is greater than 991 pixels
  if (window.innerWidth > 991) {
    // Iterate over each element and set the width
    elements.forEach((element) => {
      const dataWidth = element.getAttribute("data-width");
      console.log(dataWidth);
      if (dataWidth) {
        element.style.width = dataWidth + "%";
      }
    });
  } else {
    // Optionally reset the width if above 991px
    elements.forEach((element) => {
      element.style.width = "100%"; // or set to a default value
    });
  }
}
document.querySelectorAll("[data-download-url]").forEach((button) => {
  button.addEventListener("click", function () {
    const downloadUrl = this.getAttribute("data-download-url");

    fetch(downloadUrl)
      .then((resp) =>
        resp.status === 200
          ? resp.blob()
          : Promise.reject("something went wrong")
      )
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Children Mental Health Awareness Presentation.pdf"; // Optional: Customize filename or make it dynamic
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("Oh no! Something went wrong."));
  });
});

// Initial call
setWidths();

// Listen for window resize events
window.addEventListener("resize", setWidths);

// use a script tag or an external JS file

const defaultSliderSettings = {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: false,
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    // when window width is >= 320px
    1250: {
      spaceBetween: 20,
    },
    835: {
      spaceBetween: 18,
    },

    // when window width is >= 480px
    580: {
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
  const swiper1 = new Swiper(".swiper", {
    ...defaultSliderSettings,
    ...{
      navigation: {
        nextEl: ".swiper-button-next-custom1",
        prevEl: ".swiper-button-prev-custom1",
      },
    },
  });
});
