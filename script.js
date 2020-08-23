const modeSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');

modeSwitch.addEventListener('change', switchMode);

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 100%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 100%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchMode(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('mode', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('mode', 'light');
        lightMode();
    }
}

const currentMode = localStorage.getItem('mode');
if (currentMode) {
    document.documentElement.setAttribute('data-theme', currentMode);
    if (currentMode === 'dark') {
        modeSwitch.checked = true;
        darkMode();
    }
}

function NavDrawer() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function NavDrawerHide() {
    var x = document.getElementById("nav");
    if (x.className === "topnav responsive") {
        x.className = "topnav"
    }
}