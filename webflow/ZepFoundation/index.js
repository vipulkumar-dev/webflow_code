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
