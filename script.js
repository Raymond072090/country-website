document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", function () {
            console.log("Hamburger menu clicked!");
            mobileMenu.classList.toggle("hidden");
        });
    }
});
