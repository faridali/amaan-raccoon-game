const countdownDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
const images = ["amaan.png", "raccoon.png"];
let currentImageIndex = 0;

function updateCountdown() {
    const now = new Date();
    const distance = countdownOutput - now;
    document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("milliseconds").textContent = distance % 1000;
}

function updateImage() {
    document.getElementById("currentImage").src = images[currentImageIndex];
    currentImageIndex = (currentImage[ImageIndex + 1) % mages.length;
}

setInterval(updateCountdown, 1);
setInterval(updateImage, 1000);  // Update image every second
setInterval(() => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 3000);

updateCountdown();  // Initialize the countdown when the page loads
