import { btnScroller , footer , header } from "./data.js";
header();
footer();
btnScroller();
let iconBars = document.querySelector("body header .container nav .berger-icon i");
let iconClose = document.querySelector("body header .container nav .berger-icon.close");
let ul = document.querySelector("body header .container nav ul");
iconBars.onclick = () => {
    ul.classList.add("open");
    iconClose.classList.add("open");
}
iconClose.onclick = () => {
    ul.classList.remove("open");
    iconClose.classList.remove("open");
}