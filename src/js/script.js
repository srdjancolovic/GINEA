const hamburger = document.querySelector('.navigation__hamburger');
const navMenu = document.querySelector('.navigation__menu');
const navLinks = document.querySelectorAll('.navigation__menu-link');
const navigationBar = document.querySelector('.navigation');
const body = document.querySelector('body');

const toggleFn = () => {
    navMenu.classList.toggle('navigation__menu--show');
    hamburger.classList.toggle('navigation__hamburger--toggle');

    if (!navigationBar.classList.contains('navigation--scrolled')) {
        navigationBar.classList.toggle('navigation--green-bg');
    }

    body.classList.toggle('prevent-scroll');
};

hamburger.addEventListener('click', () => {
    toggleFn();
});

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFn();
    });
});

//Check window offset from top to toggle header classes
window.onscroll = () => {
    const scrollFromTop = document.documentElement.scrollTop;

    if (scrollFromTop > 80) {
        navigationBar.classList.add('navigation--scrolled');
    } else {
        navigationBar.classList.remove('navigation--scrolled');
    }

    return scrollFromTop;
};
