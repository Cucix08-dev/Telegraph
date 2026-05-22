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