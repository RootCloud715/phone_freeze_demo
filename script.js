let seconds = 10;

const timer = document.getElementById("timer");
const freezeScreen = document.getElementById("freeze-screen");
const revealScreen = document.getElementById("reveal-screen");

const countdown = setInterval(() => {
    seconds--;

    timer.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(countdown);

        freezeScreen.style.display = "none";
        revealScreen.hidden = false;
    }
}, 1000);