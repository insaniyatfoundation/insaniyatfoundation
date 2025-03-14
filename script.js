document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been received.");
        form.reset();
    });
});
// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Alert
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    this.reset();
});

// Ramadan Special Toggle
document.getElementById("toggle-ramadan").addEventListener("click", function() {
    const section = document.getElementById("ramadan-special");
    section.style.display = section.style.display === "none" ? "block" : "none";
});

// Image Slider for Gallery
let index = 0;
const images = ["image1.JPG", "image6.JPG", "image7.JPG", "image8.JPG", "image9.JPG"]; // Change with real paths
const imgElement = document.getElementById("gallery-img");

function changeImage() {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
}

setInterval(changeImage, 3000);
function showScanner() {
    document.getElementById("qr-popup").style.display = "block";
}

function hideScanner() {
    document.getElementById("qr-popup").style.display = "none";
}
