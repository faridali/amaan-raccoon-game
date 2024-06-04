const endTime = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
const img = document.getElementById('transformation');
let imgToggle = false;

function updateTimer() {
    const now = new Date();
    const distance = endTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = distance % 1000;

    document.getElementById('days').textContent = `Days: ${days}`;
    document.getElementById('hours').textContent = `Hours: ${hours}`;
    document.getElementById('minutes').textContent = `Minutes: ${minutes}`;
    document.getElementById('seconds').textContent = `Seconds: ${seconds}`;
    document.getElementById('milliseconds').textContent = `Milliseconds: ${milliseconds}`;

    img.src = imgToggle ? 'amaan.png' : 'raccoon.png';
    imgToggle = !imgToggle;

    // Change background color every 3 seconds
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

setInterval(updateTimer, 1);
setInterval(() => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 3000);

updateTimer();
