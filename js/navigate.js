document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("main-page-link");

  if (window.location.href.includes("github.io")) {
    link.href = "/WAP/index.html"; // Use GitHub Pages path
  } else {
    link.href = "/index.html"; // Use local path for Live Server
  }
});
