// --------------------------- THEME SWITCH ---------------------------
const theme = document.getElementById("themebtn");
const colorlight = "#9c9c9c";
const colordark  = "#222";

function applyTheme() {
    if (theme.innerText === "Dark") {
        document.documentElement.style.setProperty("--bgcolor", colordark);
        document.documentElement.style.setProperty("--textcolor", colorlight);
        theme.innerText = "Light";
    } else {
        document.documentElement.style.setProperty("--bgcolor", colorlight);
        document.documentElement.style.setProperty("--textcolor", colordark);
        theme.innerText = "Dark";
    }
}

theme.addEventListener("click", applyTheme);


// --------------------------- TYPEWRITER ENGINE ---------------------------
function typeWriter(element, speed = 8) {
    const text = element.dataset.fulltext || element.textContent.trim();
    element.dataset.fulltext = text;

    element.textContent = "";
    let i = 0;

    (function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    })();
}


// --------------------------- PAGE TOGGLER ---------------------------
function showPage(pageId) {
    // Hide all
    document.querySelectorAll(".page").forEach(p => {
        p.style.display = "none";
    });

    // Show selected page
    const page = document.getElementById(pageId);
    page.style.display = "block";

    // Start typewriter on all .typed inside this page
    page.querySelectorAll(".typed").forEach(el => {
        typeWriter(el);
    });
}


// --------------------------- BUTTON CONNECTIONS ---------------------------
// This will automatically link ANY button with data-page=""
document.querySelectorAll(".optnbtn[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetPage = btn.dataset.page;
        showPage(targetPage);
    });
});


// --------------------------- DEFAULT PAGE ---------------------------
showPage("homePage");
