document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById("timer");
    const imageContainer = document.getElementById("image-container");
    const daysTotal = 365;
    const startDate = new Date('2024-06-04');
    let showingAmaan = true;

    function updateTimer() {
        const currentDate = new Date();
        const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
        const remainingTime = (startDate.getTime() + daysTotal * 24 * 60 * 60 * 1000) - currentDate.getTime();

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        const milliseconds = remainingTime % 1000;

        timerElement.innerText = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds remaining until full transformation`;
    }

    function toggleImage() {
        if (showingAmaan) {
            imageContainer.style.backgroundImage = "url('images/raccoon.png')";
        } else {
            imageContainer.style.backgroundImage = "url('images/amaan.png')";
        }
        showingAmaan = !showingAmaan;
    }

    // Initialize with Amaan's image
    imageContainer.style.backgroundImage = "url('images/amaan.png')";

    setInterval(updateTimer, 50);
    setInterval(toggleImage, 5000);
});
