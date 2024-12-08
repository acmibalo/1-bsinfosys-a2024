const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
} else {
    enableLightMode();
}

function enableDarkMode() {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});
