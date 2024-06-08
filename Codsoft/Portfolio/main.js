/*==================== toggle icon navbar ==================================*/

let nemuIcon = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle ('fa-xmark')
    navbarclassList.toggle ('active')
} 

/*==================== scroll section active link ==================================*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav aa');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                documents.querySelector('header nav a[href*' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ==================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    /*==================== sticky navbar ==================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

/*==================== scroll reveal ==================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { delay: 500 });
ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contact form', { origen: 'button' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ==================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'web Design', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});