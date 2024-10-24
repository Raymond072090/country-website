document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", function () {
            console.log("Hamburger menu clicked!");
            hamburgerMenu.classList.toggle("hidden");
        });
    }
});
