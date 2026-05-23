let time = new Date();

const day = time.getDay();
const month = time.getMonth();
const year = time.getFullYear();

const browserTitle = document.getElementById("browser-title-page");
const titlePage = document.getElementById("title-page");

if ((year === 2026 && month >= 6) && day >= 10) {
    browserTitle.textContent = `Telegraph 5AI`;
    titlePage.textContent = `Telegraph 5AI`;
}
else{
    browserTitle.textContent = `Telegraph 4AI`
    titlePage.textContent = `Telegraph 4AI`;
}

function dayLocation(dayWeek) {
    window.location.href = `pages/orario/${dayWeek}.html`;
}

function linkPage(link) {
    window.location.href = `${link}`;
}

const main = document.getElementById("main-container");
const header = document.getElementById("header-container");
const body = document.body;

main.style.marginTop = 48 + header.offsetHeight + "px";

const navButtons = document.querySelectorAll(".nav-buttons");
navButtons.forEach(element => {
    element.addEventListener("click", () => {
        body.scrollTop -= header.offsetHeight;
    });
});

let visible = false;

const groupNavButtons = document.getElementById("group-nav-buttons");
const dMenu = document.getElementById("dropdown-menu");
main.addEventListener("click", () => {
    dMenu.style.display = "none"
});

groupNavButtons.addEventListener("click", () => {
    visible = !visible;
    dMenu.style.display =  visible? "block":"none";
});

