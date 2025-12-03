const theme = document.getElementById("themebtn");

function applyTheme() {
    // If the button currently says Dark, user wants dark mode
    if (theme.innerText === "Dark") {
        document.documentElement.style.setProperty("--bgcolor", "#222");
        document.documentElement.style.setProperty("--textcolor", "slategray");
        theme.innerText = "Light";
    } 
    else {
        document.documentElement.style.setProperty("--bgcolor", "slategray");
        document.documentElement.style.setProperty("--textcolor", "#222");
        theme.innerText = "Dark";
    }
}

theme.addEventListener("click", applyTheme);
