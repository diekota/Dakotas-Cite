// ---- Helpers you already used ----
const colors = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#f5f5dc", "#d3ffce"];
function applyRandomBackground() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}



// settings drop down toggles
const settingsToggle = document.getElementById("settingsToggle");
const settingsMenu = document.getElementById("settingsMenu");
const menuDarkMode = document.getElementById("menuDarkMode");
const menuRandomBg = document.getElementById("menuRandomBg");


settingsToggle.addEventListener("click", () => {
    const isOpen = settingsMenu.classList.toggle("open");
    settingsToggle.setAttribute("aria-expanded", String(isOpen));
    settingsMenu.setAttribute("aria-hidden", String(!isOpen));
});

document.addEventListener("click", (e) => {
    const clickedInside = e.target.closest(".settings");
    if (!clickedInside && settingsMenu.classList.contains("open")) {
        settingsMenu.classList.remove("open");
        settingsToggle.setAttribute("aria-expanded", "false");
        settingsMenu.setAttribute("aria-hidden", "true");
    }
});


function syncDarkModeLabel() {
    if (document.body.classList.contains("dark-mode")) {
        menuDarkMode.textContent = "Disable Dark Mode";
    } else {
        menuDarkMode.textContent = "Enable Dark Mode";
    }
}
syncDarkModeLabel();


menuDarkMode.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
    syncDarkModeLabel();

    settingsMenu.classList.remove("open");
    settingsToggle.setAttribute("aria-expanded", "false");
    settingsMenu.setAttribute("aria-hidden", "true")
});

menuRandomBg.addEventListener("click", () => {
    applyRandomBackground();

    settingsMenu.classList.remove("open");
    settingsToggle.setAttribute("aria-expanded", "false");
    settingsMenu.setAttribute("aria-hidden", "true");
});


