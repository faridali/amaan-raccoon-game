document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById("timer");
    const raccoonElement = document.getElementById("raccoon");
    const arrowElement = document.getElementById("arrow");
    const daysTotal = 365;
    const startDate = new Date('2024-06-04');
    
    function updateTimer() {
        const currentDate = new Date();
        const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
        const remainingDays = daysTotal - elapsedDays;
        const milliseconds = currentDate.getMilliseconds();
        
        timerElement.innerText = `${remainingDays} days and ${1000 - milliseconds} milliseconds remaining until full transformation`;
        
        if (elapsedDays >= daysTotal / 2) {
            raccoonElement.classList.add('halfway');
        }

        if (elapsedDays >= daysTotal) {
            raccoonElement.classList.add('full');
            arrowElement.classList.add('moving');
        }
    }
    
    setInterval(updateTimer, 50);
});
