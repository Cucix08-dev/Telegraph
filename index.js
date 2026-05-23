let visible = false;

const groupNavButtons = document.getElementById("group-nav-buttons");
const dMenu = document.getElementById("dropdown-menu");

groupNavButtons.addEventListener("click", () => {
    visible = !visible;
    dMenu.style.display =  visible? "block":"none";
});