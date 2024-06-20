// Light mode control feature section 
let lightmodeBTN = document.getElementById("lightmodeBTN"); // Light Mode Button

// Function to toggle dark mode/light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');

    // Save the current mode to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event listener for the light mode button
lightmodeBTN.addEventListener("click", toggleMode);

// Check local storage for the saved theme on page load
window.addEventListener("load", () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkMode();
    } else {
        lightMode();
    }
});


let sty = document.createElement("link");
sty.setAttribute('rel', 'stylesheet');
sty.setAttribute("href", "/Style/darkstyle.css");

function lightMode() {
    lightmodeBTN.style.backgroundImage = 'url(/Files/sun.png)';
    document.head.appendChild(sty);
}
function darkMode() {
    lightmodeBTN.style.backgroundImage = 'url(/Files/moon.png)';
    document.head.removeChild(sty);

}
let MoreNavWin = document.getElementById("MoreNavWin");
let MoreNavMWin = document.getElementById("MoreNavMWin");
document.getElementById("NavMoreLnkBtn").addEventListener("click", () => {
    if (MoreNavWin.style.height != "8rem") {
        MoreNavWin.style.height = "8rem";
        MoreNavMWin.style.display = "flex";
    } else {
        MoreNavMWin.style.display = "none";
        MoreNavWin.style.height = "0rem";
    }
})