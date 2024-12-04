ScrollReveal().reveal('.heading', {
        distance: '50px',
        origin: 'top',
        duration: 1000,
        delay: 200,
        reset: true,
        opacity: 0,
        easing: 'ease-in-out',
        beforeReveal: function(el) {
            el.classList.add('animate__animated', 'animate__fadeInDown');
        }
    });

ScrollReveal().reveal('.image', {
    distance: '50px',
    origin: 'left',
    duration: 1000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    beforeReveal: function(el) {
        el.classList.add('animate__animated', 'animate__fadeInLeft');
    }
});

ScrollReveal().reveal('.content', {
    distance: '50px',
    origin: 'right',
    duration: 1000,
    delay: 600,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    beforeReveal: function(el) {
        el.classList.add('animate__animated', 'animate__fadeInRight');
    }
});

ScrollReveal().reveal('.box-container', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 800,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    beforeReveal: function(el) {
        el.classList.add('animate__animated', 'animate__fadeInUp');
    }
});

ScrollReveal().reveal('.resumebtn', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 1000,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    beforeReveal: function(el) {
        el.classList.add('animate__animated', 'animate__zoomIn');
    }
});

ScrollReveal().reveal('.project-box', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 1000,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    beforeReveal: function(el) {
        el.classList.add('animate__animated', 'animate__zoomIn');
    }
});

ScrollReveal().reveal('.bar', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 800,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    beforeReveal: function(el) {
        el.classList.add('animate__animated', '.light-theme');
    }
});