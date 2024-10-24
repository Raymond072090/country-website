document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', function() {
            const menu = document.querySelector('.hamburger-menu');
            menu.classList.toggle('show');
        });
    }
});
