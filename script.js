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
main.style.marginTop = 48 + header.offsetHeight + "px";
const headerPadding = parseFloat(getComputedStyle(header).paddingTop);
const fullHeaderSpace = header.offsetHeight + headerPadding * 2;

const navButtons = document.querySelectorAll(".nav-button a");

navButtons.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // blocca lo scroll automatico

        const target = document.querySelector(link.getAttribute("href"));
        const targetY = target.offsetTop - fullHeaderSpace;

        document.documentElement.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    });
});
