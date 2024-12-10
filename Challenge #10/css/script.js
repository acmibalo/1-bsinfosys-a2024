// JavaScript for European Football Website

// Smooth scrolling to sections when navigation links are clicked
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight the active navigation link based on the section in view
const sections = document.querySelectorAll('.container');
const navLinks = document.querySelectorAll('.nav-bar a');

const highlightNav = () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Form validation and submission feedback
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('input[name="Name"]').value.trim();
    const email = form.querySelector('input[name="Email"]').value.trim();
    const message = form.querySelector('textarea[name="Message"]').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
    } else {
        alert(`Thank you for reaching out, ${name}! Your message has been sent.`);
        form.reset();
    }
});
