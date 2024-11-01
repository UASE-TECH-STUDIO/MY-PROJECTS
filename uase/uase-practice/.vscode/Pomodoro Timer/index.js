const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
const resetEl = document.querySelector(".reset");
const timeEl = document.querySelector(".time");

let time = 30; // Initial time set to 25 minutes (1500 seconds)
let interval;
let isRunning = false;

// Function to format time as mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Update the displayed time
timeEl.textContent = formatTime(time);

// Start the countdown
function startCount() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            if (time > 0) {
                time--;
                timeEl.textContent = formatTime(time);
            } else {
                clearInterval(interval);
                alert("Time's up!");
            }
        }, 1000);
    }
}

// Stop the countdown
function stopCount() {
    clearInterval(interval);
    isRunning = false;
}

// Reset the countdown
function resetCount() {
    clearInterval(interval);
    time = 1500; // Reset to 25 minutes
    timeEl.textContent = formatTime(time);
    isRunning = false;
}

// Event listeners for the buttons
startEl.addEventListener("click", startCount);
stopEl.addEventListener("click", stopCount);
resetEl.addEventListener("click", resetCount);
