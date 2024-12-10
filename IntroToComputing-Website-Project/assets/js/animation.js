// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class when element is in view
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);  // Stop observing once the animation has been applied
        }
    });
}, { threshold: 0.8}); // Trigger when 50% of the element is in view

// Add data-animation attribute to each element for different animations
const animateElements = document.querySelectorAll('.container, .grid-item, .main-certificate, .education .box');
animateElements.forEach(element => {
    const animationClass = element.classList.contains('fade-in') ? 'fade-in' :
                           element.classList.contains('slide-up') ? 'slide-up' :
                           element.classList.contains('zoom-in') ? 'zoom-in' : 'slide-left';
    element.dataset.animation = animationClass; // Add animation type as a data attribute
    observer.observe(element);
});
