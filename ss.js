// Function to get query parameters from the current URL
function getQueryParams() {
  return window.location.search; // Returns the query string, e.g., "?gclid=abc123&h_ga=xyz456"
}

// Function to add query parameters to all buttons with the specified href
function addQueryParamsToButtons(targetUrl) {
  // Select all elements with the specified href
  document.querySelectorAll(`[href='${targetUrl}']`).forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Prevent the default button behavior
      event.preventDefault();

      // Get current query parameters
      var queryParams = getQueryParams();

      // Append query parameters to the button's href
      var fullCheckoutUrl = "https://google.com" + queryParams;

      // Redirect the user to the checkout page with query parameters
      window.location.href = fullCheckoutUrl;
    });
  });
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log(
    document.querySelectorAll(
      `[href='https://courses.waqasqazi.com/qt-bundle/buy']`
    )
  );
  addQueryParamsToButtons("https://courses.waqasqazi.com/qt-bundle/buy");
});
