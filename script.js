// --------------------------- THEME SWITCH ---------------------------
const theme = document.getElementById("themebtn");
const colorlight = "#787878";
const colordark  = "#222";
const circle = document.getElementById('cursor');

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



// --------------------------- CURSOR ---------------------------
window.addEventListener('mousemove', e => {
  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';
});

window.addEventListener('mousedown', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

window.addEventListener('mouseup', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(1)';
});


// --------------------------- LOADING SCREEN ---------------------------
const loadbar = document.getElementById("box");
const frame = document.getElementById("frame");

setTimeout(() => {

    
    // hide loading animation
    loadbar.style.display = "none";
    
    // show main content
    frame.style.display = "flex";
    
    // show cursor again
    circle.style.display = "block";
    
    // load home page
    showPage("homePage");

}, 5000);



// --------------------------- DEFAULT PAGE ---------------------------
// showPage("homePage");
