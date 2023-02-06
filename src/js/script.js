const hamburger = document.querySelector('.navigation__hamburger');
const navMenu = document.querySelector('.navigation__menu');
const navLinks = document.querySelectorAll('.navigation__menu-link');
const navigationBar = document.querySelector('.navigation');
const body = document.querySelector('body');
const progressBar = document.querySelector('.progress-bar');

const toggleFn = () => {
    navMenu.classList.toggle('navigation__menu--show');
    hamburger.classList.toggle('navigation__hamburger--toggle');

    const innerWidth = window.innerWidth;

    if (innerWidth < 768) {
        body.classList.toggle('prevent-scroll');

        if (!navigationBar.classList.contains('navigation--scrolled')) {
            navigationBar.classList.toggle('navigation--green-bg');
        }
    }
};

const scrollProgressBar = () => {
    let scrollDistance = body.getBoundingClientRect().top;

    let progressPercentage =
        (scrollDistance /
            (body.getBoundingClientRect().height -
                document.documentElement.clientHeight)) *
        100;

    const percentage = Math.abs(progressPercentage);

    let val = Math.floor(percentage);
    progressBar.style.width = val + '%';

    if (val === 0) {
        progressBar.style.width = '0%';
    }
};

window.addEventListener('scroll', scrollProgressBar);

hamburger.addEventListener('click', () => {
    toggleFn();
});

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        toggleFn();
    });
});

//Check window offset from top to toggle header classes
window.onscroll = () => {
    const scrollFromTop = document.documentElement.scrollTop;

    if (scrollFromTop > 0) {
        navigationBar.classList.add('navigation--scrolled');
    } else {
        navigationBar.classList.remove('navigation--scrolled');
    }

    return scrollFromTop;
};
