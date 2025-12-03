const theme = document.getElementById("themebtn");
const colorlight = "#9c9c9c"
const colordark = "#222"

function applyTheme() {
    // If the button currently says Dark, user wants dark mode
    if (theme.innerText === "Dark") {
        document.documentElement.style.setProperty("--bgcolor", colordark);
        document.documentElement.style.setProperty("--textcolor", colorlight);
        theme.innerText = "Light";
    } 
    else {
        document.documentElement.style.setProperty("--bgcolor", colorlight);
        document.documentElement.style.setProperty("--textcolor", colordark);
        theme.innerText = "Dark";
    }
}

theme.addEventListener("click", applyTheme);
