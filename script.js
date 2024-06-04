let countdownDate = new Date().getTime() + 365 * 24 * 60 * 60 * 1000;

let transformationImages = [
    'amaan1.jpg',
    'amaan2.jpg',
    'amaan3.jpg',
    'raccoon.jpg'
];

let currentImageIndex = 0;

function updateCountdown() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((distance % 1000) / 10);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("milliseconds").innerText = milliseconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerText = "Amaan is now a raccoon!";
    }
}

function changeBackgroundColor() {
    let colors = ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0000', '#00FF00', '#0000FF', '#FF1493', '#7FFF00', '#FF4500', '#1E90FF'];
    let currentColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[currentColorIndex];
}

function changeTransformationImage() {
    currentImageIndex = (currentImageIndex + 1) % transformationImages.length;
    document.getElementById("transformation").src = transformationImages[currentImageIndex];
}

setInterval(updateCountdown, 10);
setInterval(changeBackgroundColor, 1000);
setInterval(changeTransformationImage, 1000);
