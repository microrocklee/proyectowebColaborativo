const body = document.body;
const button = document.getElementById("toggle-theme");

function setTheme(theme) {
    body.className = theme;
    localStorage.setItem("theme", theme);
}

// Verifica que el botón exista para evitar errores si el script se carga antes del HTML
if (button) {
    button.addEventListener("click", () => {
        const currentTheme = body.classList.contains("dark-theme") ? "light-theme" : "dark-theme";
        setTheme(currentTheme);

        // Cambiar el texto del botón para mayor feedback
        button.textContent = currentTheme === "dark-theme" ? "Cambiar a Tema Claro" : "Cambiar a Tema Oscuro";
    });
}

// Recuperar el tema guardado
const savedTheme = localStorage.getItem("theme") || "light-theme";
setTheme(savedTheme);

// Ajustar el texto del botón según el tema guardado
button.textContent = savedTheme === "dark-theme" ? "Cambiar a Tema Claro" : "Cambiar a Tema Oscuro";
