let timer = 30;
const countdownElement = document.getElementById('timer');
const amaan = document.getElementById('amaan');

function startCountdown() {
    const countdown = setInterval(() => {
        if (timer > 0) {
            timer--;
            countdownElement.textContent = timer;
        } else {
            clearInterval(countdown);
            alert('Time is up! Try again.');
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    amaan.style.top = '10px';
    amaan.style.left = '10px';
    timer = 30;
    countdownElement.textContent = timer;
    startCountdown();
}

document.addEventListener('DOMContentLoaded', (event) => {
    startCountdown();

    amaan.addEventListener('dragstart', dragStart);
    amaan.addEventListener('dragend', dragEnd);

    const maze = document.getElementById('maze');
    maze.addEventListener('dragover', dragOver);
    maze.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragEnd(event) {
    event.target.classList.remove('hide');
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    const x = event.clientX - dropzone.getBoundingClientRect().left - draggableElement.clientWidth / 2;
    const y = event.clientY - dropzone.getBoundingClientRect().top - draggableElement.clientHeight / 2;

    draggableElement.style.left = `${x}px`;
    draggableElement.style.top = `${y}px`;

    checkWin();
}

function checkWin() {
    const amaanRect = amaan.getBoundingClientRect();
    const raccoonRect = document.getElementById('raccoon').getBoundingClientRect();

    if (
        amaanRect.left < raccoonRect.right &&
        amaanRect.right > raccoonRect.left &&
        amaanRect.top < raccoonRect.bottom &&
        amaanRect.bottom > raccoonRect.top
    ) {
        alert('You win!');
        resetGame();
    }
}
