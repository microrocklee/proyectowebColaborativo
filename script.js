const body = document.body;
const button = document.getElementById("toggle-theme");

function setTheme(theme) {
    body.className = theme;
    localStorage.setItem("theme", theme);
}

button.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-theme") ? "light-theme" : "dark-theme";
    setTheme(currentTheme);
});

const savedTheme = localStorage.getItem("theme") || "light-theme";
setTheme(savedTheme);
