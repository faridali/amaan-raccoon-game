document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById("timer");
    const raccoonElement = document.getElementById("raccoon");

    const daysTotal = 365;
    const startDate = new Date('2024-06-04');
    const currentDate = new Date();

    const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const remainingDays = daysTotal - elapsedDays;

    timerElement.innerText = `${remainingDays} days remaining until full transformation`;

    if (elapsedDays >= daysTotal / 2) {
        raccoonElement.classList.add('halfway');
    }

    if (elapsedDays >= daysTotal) {
        raccoonElement.style.opacity = 1;
    }
});
