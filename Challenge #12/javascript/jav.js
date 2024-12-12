// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  const email = document.getElementById('email').value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address!');
    event.preventDefault();
  }
});

// Image Carousel
let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-images img');
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Modal Functions
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Toggle Navbar on small screens
function toggleNavbar() {
  const menu = document.querySelector('.navbar-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
