const Furniture = document.querySelector('.Furniture');
const navlinks = document.querySelector('.nav-links');
let menuOpen = false;

Furniture.addEventListener('click', () => {
	if (menuOpen == false) {
		navlinks.style.display = "block";
		menuOpen = true;
		
	}
	else if (menuOpen = true) {
			navlinks.style.display = "none";
			menuOpen = false;
	}
});

