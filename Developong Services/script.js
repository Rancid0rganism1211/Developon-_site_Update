document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navlinks = document.querySelector('.nav__links');

    menuIcon.addEventListener('click', function () {
        navlinks.classList.toggle('show');
    });
});
