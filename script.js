const countdownDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
const images = ["amaan.png", "raccoon.png"];
let currentImageIndex = 0;

function updateCountdown() {
    const now = new Date();
    const distance = countdownDate - now;
    document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = Math.floor((
