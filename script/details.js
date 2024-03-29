import {data , btnScroller , footer , header} from "./data.js";
header()
footer()
btnScroller()
let iconBars = document.querySelector("body header .container nav .berger-icon i")
let iconClose = document.querySelector("body header .container nav .berger-icon.close")
let ul = document.querySelector("body header .container nav ul")
iconBars.onclick = () => {
    ul.classList.add("open");
    iconClose.classList.add("open");
}
iconClose.onclick = () => {
    ul.classList.remove("open");
    iconClose.classList.remove("open")
}
let img = document.querySelector("body .details .container .game-details .img img"),
mainName = document.querySelector("body .game-info h2"),
secondName = document.querySelector("body .details .container .game-details .info h2"),
price = document.querySelector("body .details .container .game-details .info > span span"),
description = document.querySelector("body .details .container .game-details .info h3"),
input = document.querySelector("body .details .container .game-details .info input"),
genre = document.querySelector("body .details .container .game-details .info p span"),
parDescription = document.querySelector("body .details .container .description p")
function gameData () {
    img.src = data[JSON.parse(localStorage.card)].gameImg;
    mainName.innerHTML = data[JSON.parse(localStorage.card)].gameName;
    secondName.innerHTML = data[JSON.parse(localStorage.card)].gameName;
    let count = setInterval( _ => {
        price.textContent++;
        if(price.textContent == data[JSON.parse(localStorage.card)].gamePrice){
            clearInterval(count)
        }
    }, 70)
    description.innerHTML = data[JSON.parse(localStorage.card)].gameDescription;
    input.value = data[JSON.parse(localStorage.card)].gameInp;
    genre.innerHTML = data[JSON.parse(localStorage.card)].gameGenre;
    parDescription.innerHTML = data[JSON.parse(localStorage.card)].gameDescription;
}
gameData()