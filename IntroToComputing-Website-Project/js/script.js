
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

const texts = [
    "Web Developer",
    "Software Developer",
    "Web Designer",
    "Graphic Designer",
    "Video Editor"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});



const themeToggle = document.getElementById('theme-toggle');


themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    

    if (document.body.classList.contains('light-theme')) {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});


const cat = document.getElementById('cat');
const chatContainer = document.getElementById('chat-container');
const chatBody = document.getElementById('chat-body');
const questions = document.getElementById('questions');
const speechBubble = document.getElementById('speech-bubble');

cat.addEventListener('click', () => {
  chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
});

questions.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const question = e.target.getAttribute('data-question');
    displayAnswer(question);
    chatBody.style.opacity = 0;
    setTimeout(() => {
      chatBody.style.display = 'none';
      chatBody.style.opacity = 1;
      setTimeout(() => {
        chatBody.style.display = 'block';
      }, 2000);
    }, 2000);
  }
});

function displayAnswer(question) {
  const answers = {
    "How do I contact the developer?": "Meow! Reach out via email: s.kjoagudo@usm.edu.ph or just click the contact menu.",
    "What services do you offer?": "Purr-fect web development, design, and many more. Let's discuss your project!",
    "What's your experience?": "I have 6 months of experience in web development, with focusing in designing and editing."
  };

  const answer = answers[question] || "Sorry, I didn't understand.";
  speechBubble.innerText = answer;
  speechBubble.style.color = 'white';
  speechBubble.style.display = 'block';
  setTimeout(() => {
    speechBubble.style.display = 'none';
  }, 5000);
}