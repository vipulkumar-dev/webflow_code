console.log("category 23");

window.addEventListener("load", (event) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const categoryValue = urlParams.get("category");
  console.log(categoryValue);

  const tabElement = document.querySelector(`[data-w-tab="${categoryValue}"]`);

  // If a matching tab is found, trigger a click on it
  if (tabElement) {
    tabElement.click();
  }
});

document.addEventListener("click", function (event) {
  // Check if clicked element or its parent has the data-category attribute
  let categoryElement = event.target.hasAttribute("data-category")
    ? event.target
    : event.target.closest("[data-category]");

  if (categoryElement) {
    // Get the value of the data-category attribute
    const categoryValue = categoryElement.getAttribute("data-category");
    console.log(categoryValue);

    // Find the matching tab element using the data-w-tab attribute
    const tabElement = document.querySelector(
      `[data-w-tab="${categoryValue}"]`
    );

    // If a matching tab is found, trigger a click on it
    if (tabElement) {
      tabElement.click();
    }

    // Extract text directly from the category element
    const categoryText = categoryElement.textContent.trim();

    // Find the element with .replace-text class
    const replaceTextElement = document.querySelector(".replace-text");

    // If found, replace its text content with the text extracted from data-category element
    if (replaceTextElement) {
      replaceTextElement.textContent = categoryText;
    }
  }
});

// $("[data-category]").click(function () {
//   //$(".category").css("z-index", "");
//   $(".category").triggerHandler("w-close.w-category");
// });
