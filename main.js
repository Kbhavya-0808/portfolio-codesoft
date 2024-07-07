// Toggle menu icon and navbar active class
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Smooth scroll and active link highlighting on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let secTop = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');

        if (scrollY >= secTop && scrollY < secTop + secHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + secId + '"]').classList.add('active');
        }
    });

    // Add sticky class to header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // Close navbar and reset menu icon on scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['HTML', 'CSS', 'JavaScript', 'Python'],// Array of strings to be typed
    typeSpeed: 70, // Typing speed in milliseconds
    backSpeed: 70, // Backspacing speed in milliseconds
    backDelay: 1000, // Delay in milliseconds after finishing typing a string
    loop: true // Whether to loop through the strings infinitely
});



