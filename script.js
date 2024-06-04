const endDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);
const img1 = 'amaan.png';
const img2 = 'raccoon.png';
let imgToggle = false;

function updateTimer() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        document.getElementById('time').innerHTML = "00:00:00.000";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000;

    document.getElementById('time').innerHTML = days + " days " + 
        hours.toString().padStart(2, '0') + ":" + 
        minutes.toString().padStart(2, '0') + ":" + 
        seconds.toString().padStart(2, '0') + "." + 
        milliseconds.toString().padStart(3, '0');
    
    document.getElementById('image').src = imgToggle ? img1 : img2;
    imgToggle = !imgToggle;
}

function changeBackground() {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

setInterval(updateTimer, 1);
setInterval(changeBackground, 3000);

document.getElementById('image').src = img1;
