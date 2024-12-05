document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Reset feedback message
        formMessage.textContent = "";
        formMessage.style.color = "";

        // Input validation
        if (!name || !email || !message) {
            formMessage.textContent = "All fields are required.";
            formMessage.style.color = "red";
            return;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // Simulate asynchronous submission
        formMessage.textContent = "Sending your message...";
        formMessage.style.color = "blue";

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate server delay

            formMessage.textContent = Thank you, ${name}! Your message has been sent successfully.;
            formMessage.style.color = "green";

            // Clear the form
            contactForm.reset();
        } catch (error) {
            formMessage.textContent = "Something went wrong. Please try again later.";
            formMessage.style.color = "red";
        }
    });
});