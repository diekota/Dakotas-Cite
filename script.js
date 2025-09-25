// ======================
// Random background helper (About page)
// ======================
const colors = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#f5f5dc", "#d3ffce"];
function applyRandomBackground() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // SETTINGS / DARK MODE (About page only)
  // ======================
  const settingsToggle = document.getElementById("settingsToggle");
  const settingsMenu   = document.getElementById("settingsMenu");
  const menuDarkMode   = document.getElementById("menuDarkMode");
  const menuRandomBg   = document.getElementById("menuRandomBg");

  if (settingsToggle && settingsMenu && menuDarkMode && menuRandomBg) {
    const syncDarkModeLabel = () => {
      menuDarkMode.textContent = document.body.classList.contains("dark-mode")
        ? "Disable Dark Mode"
        : "Enable Dark Mode";
    };

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

  // ======================
  // SIMPLE LOGIN (Login page only)
  // ======================
  const form = document.getElementById("loginForm");
  if (form) {
    const users = [
      { username: "Alyssa",  password: "ILD" },
      { username: "Dakota",  password: "ILD" },
      { username: "Zoe",     password: "ILD" },
      { username: "Emmie",   password: "ILD" },
      { username: "Ashlynn", password: "ILD" },
      { username: "Claire",  password: "ILD" },
    ];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const u = document.getElementById("username").value.trim();
      const p = document.getElementById("password").value;
      const error = document.getElementById("error");

      const found = users.find(
        user => user.username.toLowerCase() === u.toLowerCase() && user.password === p
      );

      if (found) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "about.html";
      } else {
        error.textContent = "Invalid username or password!";
      }
    });
  }
});
