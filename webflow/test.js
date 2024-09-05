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
