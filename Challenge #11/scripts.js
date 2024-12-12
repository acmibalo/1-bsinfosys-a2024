// Modal functionality
document.getElementById("openModal").onclick = function() {
    document.getElementById("myModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// Accordion functionality
document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        let panel = item.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Tab functionality
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
