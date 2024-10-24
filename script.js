// script.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburgerIcon.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("hidden");
    });
});
