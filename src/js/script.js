const hamburger = document.querySelector('.navigation__hamburger');
const navMenu = document.querySelector('.navigation__menu');
const navLinks = document.querySelectorAll('.navigation__menu-link');
const navigationBar = document.querySelector('.navigation');
const body = document.querySelector('body');
const progressBar = document.querySelector('.progress-bar');
const topBtn = document.querySelector('.top-btn');

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
        topBtn.classList.add('top-btn--show');
    } else {
        navigationBar.classList.remove('navigation--scrolled');
        topBtn.classList.remove('top-btn--show');
    }

    return scrollFromTop;
};

// Smooth scroll for Safari browsers
const ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
        $('.navigation__menu-link, .smooth-scroll, .btn').on(
            'click',
            function (e) {
                if (this.hash !== '') {
                    const hash = this.hash;

                    $('html, body').animate(
                        {
                            scrollTop: $(hash).offset().top,
                        },
                        800
                    );
                }
            }
        );
    } else {
        $(' .navigation__menu-link, .smooth-scroll, .btn').on(
            'click',
            function (e) {
                if (this.hash !== '') {
                    const hash = this.hash;
                    $('html, body').animate(
                        {
                            scrollTop: $(hash).offset().top,
                        },
                        800
                    );
                }
            }
        );
    }
}

//Animations
window.addEventListener('load', () => {
    gsap.to('.preloader', { opacity: 0, zIndex: -10 });
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
    timeline

        .from('.navigation__logo', {
            x: -30,
            opacity: 0,
        })
        .from('.navigation__hamburger', {
            x: 30,
            opacity: 0,
        })
        .from('.landing__heading-btn', { y: 50, opacity: 0 })
        .from('.navigation__menu-link', { opacity: 0, stagger: 0.2 });
});

//Callback function for target
const callback = function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.timeline.play();
        }
    });
};

//Intersection observer

const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.3,
});

///SlideInUp Animation

const slideInUpAnim = document.querySelectorAll('.slideInUp');
slideInUpAnim.forEach(function (item) {
    const action = gsap
        .timeline({ paused: true })
        .from(item, { y: 40, opacity: 0, duration: 0.6, delay: 0.5 });

    item.timeline = action;
});

Array.prototype.forEach.call(slideInUpAnim, (el) => {
    observer.observe(el);
});

///SlideInLeft
const slideInLeftAnim = document.querySelectorAll('.slideInLeft');
slideInLeftAnim.forEach(function (item) {
    const action = gsap
        .timeline({ paused: true })
        .from(item, { x: -40, opacity: 0, duration: 0.6, delay: 0.5 });
    item.timeline = action;
});
Array.prototype.forEach.call(slideInLeftAnim, (el) => {
    observer.observe(el);
});

///SlideInRight
const slideInRight = document.querySelectorAll('.slideInRight');
slideInRight.forEach(function (item) {
    const action = gsap
        .timeline({ paused: true })
        .from(item, { x: 40, opacity: 0, duration: 0.6, delay: 0.5 });
    item.timeline = action;
});
Array.prototype.forEach.call(slideInRight, (el) => {
    observer.observe(el);
});

const scaleIn = document.querySelectorAll('.scaleIn');
scaleIn.forEach(function (item) {
    const action = gsap
        .timeline({ paused: true })
        .from(item, { opacity: 0, duration: 0.8, delay: 0.5, scale: 0.8 });
    item.timeline = action;
});
Array.prototype.forEach.call(scaleIn, (el) => {
    observer.observe(el);
});

const menu = new Swiper('.pricelist-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1400: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
