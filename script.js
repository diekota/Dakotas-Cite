// ---- Helpers you already used ----
const colors = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#f5f5dc", "#d3ffce"];
function applyRandomBackground() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}



// settings drop down toggles
// settings drop down toggles
const settingsToggle = document.getElementById("settingsToggle");
const settingsMenu   = document.getElementById("settingsMenu");
const menuDarkMode   = document.getElementById("menuDarkMode");
const menuRandomBg   = document.getElementById("menuRandomBg");

if (settingsToggle && settingsMenu && menuDarkMode && menuRandomBg) {
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

  menuDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    syncDarkModeLabel();
    settingsMenu.classList.remove("open");
    settingsToggle.setAttribute("aria-expanded", "false");
    settingsMenu.setAttribute("aria-hidden", "true");
  });

  menuRandomBg.addEventListener("click", () => {
    applyRandomBackground();
    settingsMenu.classList.remove("open");
    settingsToggle.setAttribute("aria-expanded", "false");
    settingsMenu.setAttribute("aria-hidden", "true");
  });
}



const users = [
    {username: "Alyssa", password: "ILD"},
    {username: "Dakota", password: "ILD"},
    {username: "Zoe", password: "ILD"},
    {username: "Emmie", password: "ILD"},
    {username: "Ashlynn", password: "ILD"},
    {username: "Claire", password: "ILD"},
];

const form = document.getElementById("loginForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const u = document.getElementById("username").value.trim();
        const p = document.getElementById("password").value;
        const error = document.getElementById("error");

        const found = users.find(user => user.username === u && user.password === p);

        if (found) {
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "about.html"
        } else  {
            error.textContent = "Invalid username or password!";
        }
    });
}