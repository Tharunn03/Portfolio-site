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

// Page toggle system
function showPage(pageId) {
    // hide all pages
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");

    // show selected page
    document.getElementById(pageId).style.display = "block";
}

// Button click connections
document.getElementById("hme").onclick = () => showPage("homePage");
document.getElementById("exp").onclick = () => showPage("expPage");
document.getElementById("prj").onclick = () => showPage("prjPage");
document.getElementById("edu").onclick = () => showPage("eduPage");
document.getElementById("ach").onclick = () => showPage("achPage");

// show home by default
showPage("homePage");

theme.addEventListener("click", applyTheme);
