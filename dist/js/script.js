"use strict";var hamburger=document.querySelector(".navigation__toggler"),navMenu=document.querySelector(".navigation__menu"),navLinks=document.querySelectorAll(".navigation__menu-link"),navigationBar=document.querySelector(".navigation"),body=document.querySelector("body"),progressBar=document.querySelector(".progress-bar"),topBtn=document.querySelector(".go-to-top-btn"),toggleFn=function(){navMenu.classList.toggle("navigation__menu--show"),hamburger.classList.toggle("navigation__toggler--toggle"),window.innerWidth<768&&(body.classList.toggle("prevent-scroll"),navigationBar.classList.contains("navigation--scrolled")||navigationBar.classList.toggle("navigation--green-bg"))},scrollProgressBar=function(){var e=body.getBoundingClientRect().top/(body.getBoundingClientRect().height-document.documentElement.clientHeight)*100,e=Math.abs(e),e=Math.floor(e);progressBar.style.width=e+"%",0===e&&(progressBar.style.width="0%")},ua=(window.addEventListener("scroll",scrollProgressBar),hamburger.addEventListener("click",function(){toggleFn()}),navLinks.forEach(function(e){e.addEventListener("click",function(e){toggleFn()})}),window.onscroll=function(){var e=document.documentElement.scrollTop;return 0<e?(navigationBar.classList.add("navigation--scrolled"),topBtn.classList.add("go-to-top-btn--show")):(navigationBar.classList.remove("navigation--scrolled"),topBtn.classList.remove("go-to-top-btn--show")),e},navigator.userAgent.toLowerCase()),callback=(-1!=ua.indexOf("safari")&&(-1<ua.indexOf("chrome")?$(".navigation__menu-link, .smooth-scroll, .btn").on("click",function(e){var n;""!==this.hash&&(n=this.hash,$("html, body").animate({scrollTop:$(n).offset().top},800))}):$(" .navigation__menu-link, .smooth-scroll, .btn").on("click",function(e){var n;""!==this.hash&&(n=this.hash,$("html, body").animate({scrollTop:$(n).offset().top},800))})),window.addEventListener("load",function(){gsap.to(".preloader",{opacity:0,zIndex:-10}),gsap.timeline({defaults:{duration:.5}}).from(".navigation__logo",{x:-30,opacity:0}).from(".navigation__hamburger",{x:30,opacity:0}).from(".landing__heading-btn",{y:50,opacity:0}).from(".navigation__menu-link",{opacity:0,stagger:.2})}),function(e){e.forEach(function(e){e.isIntersecting&&e.target.timeline.play()})}),observer=new IntersectionObserver(callback,{root:null,threshold:.3}),slideInUpAnim=document.querySelectorAll(".slideInUp"),scaleIn=(slideInUpAnim.forEach(function(e){var n=gsap.timeline({paused:!0}).from(e,{y:40,opacity:0,duration:.6,delay:.5});e.timeline=n}),Array.prototype.forEach.call(slideInUpAnim,function(e){observer.observe(e)}),document.querySelectorAll(".scaleIn")),menu=(scaleIn.forEach(function(e){var n=gsap.timeline({paused:!0}).from(e,{opacity:0,duration:.8,delay:.5,scale:.8});e.timeline=n}),Array.prototype.forEach.call(scaleIn,function(e){observer.observe(e)}),new Swiper(".pricelist-swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:20},1025:{slidesPerView:2,spaceBetween:20},1400:{slidesPerView:3,spaceBetween:20}}}));
//# sourceMappingURL=script.js.map
