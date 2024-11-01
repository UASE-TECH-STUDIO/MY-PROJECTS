const bodyEl = document.querySelector("body");
const modeButtons = document.querySelectorAll(".mode-toggle button");

function setMode(mode) {
    bodyEl.classList.remove("light-mode", "dark-mode", "purple-mode");
    bodyEl.classList.add(mode + "-mode");

    // Save the selected mode in localStorage
    localStorage.setItem("mode", mode);
}

// Check for previously saved mode from localStorage
const storedMode = localStorage.getItem("mode");
if (storedMode) {
    setMode(storedMode);
}

// Add event listeners to mode toggle buttons
modeButtons.forEach(button => {
    button.addEventListener("click", () => {
        setMode(button.textContent.toLowerCase());
    });
});