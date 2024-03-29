import { btnScroller, footer} from "./data.js"
footer()
btnScroller()
function sleep(ms) {
    return new Promise(res => setTimeout(res,ms))
}
let textContainer = document.querySelector("body .home .container h2 .span-text");
let text = ["Enjoy the lowest price","Coda Game For Arab"];
let sleepTimer = 100;
let writerIndex = 0;
let writer = async () => {
    while(true) {
        let wordIndex = text[writerIndex];
        for(let i = 0 ; i < wordIndex.length; i++){
            textContainer.innerText = wordIndex.substring(0 , i + 1);
            await sleep(sleepTimer);
        }
        await sleep(sleepTimer * 5)
        for(let i = wordIndex.length; i > 0; i--){
            textContainer.innerText = wordIndex.substring(0 , i - 1);
            await sleep(sleepTimer);
        }
        await sleep(sleepTimer * 10)
        if(writerIndex === text.length - 1){
            writerIndex = 0;
        }
        else {
            writerIndex++
        }
    }
}
writer()
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
let imgBox = document.querySelectorAll("body .home .container .imges img");
let currentIndex = 0;
let interval = setInterval( _ => {
    if(currentIndex === imgBox.length - 1){
        let prev = setInterval( _ => {
            imgBox[currentIndex].style.translate = '0';
            currentIndex--
            if(currentIndex === 0){
                clearInterval(prev)
            }
        },2000)
    }
    else {
        currentIndex++
        imgBox[currentIndex].style.translate = `${currentIndex * - 100}%`;
    }
}, 2000)
let gameCard = document.querySelectorAll("body .trending .games-trending .game");
gameCard.forEach( (card , index)=> {
    card.onclick = () => {
        localStorage.setItem("card",JSON.stringify(index));
        window.location.assign("pages/details.html")
    }
})
let buttons = document.querySelectorAll("body .most-played .container .cards button");
buttons.forEach( (btn , index) => {
    btn.onclick = () => {
        localStorage.setItem("card",JSON.stringify(index));
        window.location.assign("pages/details.html")
    }
})
let randomData = [
    {
        gameName : "Mortal Kompat",
        gameImg : "imges/mortal-kombat-kollection-online-kollection-online-pc-game-cover.jpg",
        gamePrice: 20,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "Mortal Kombat, a series of brutal, bloody and violent fighting games, produced by the American company Midway Games. The series began with the release of the first part in 1992. The series then continued on to PlayStation devices with its four parts.",
    },
    {
        gameName : "Tekken-7",
        gameImg : "imges/tekken-7-definitive-edition-definitive-edition-pc-game-steam-cover.jpg",
        gamePrice: 30,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "Tekken 7 is an arcade-type electronic game produced by Namco Bandai Holdings. The game is the seventh version, following eight previous parts. The game will work on PC devices, PS4 home entertainment devices, and Xbox One. The game will be released in February 2015 for arcade devices and at a later time for consoles.",
    },
    {
        gameName : "Tekken-8",
        gameImg : "imges/tekken-8-pc-game-steam-cover.jpg",
        gamePrice: 10,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "Tekken 8 is an arcade-type electronic game produced by Namco Bandai Holdings. The game is the seventh version, following eight previous parts. The game will work on PC devices, PS4 home entertainment devices, and Xbox One. The game will be released in February 2015 for arcade devices and at a later time for consoles.",
    },
    {
        gameName : "Grand Theft Auto",
        gameImg : "imges/grand-theft-auto-vi-pc-game-rockstar-cover.jpg",
        gamePrice: 20,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "Grand Theft Auto is a series of action-adventure games created by David Jones and Mike Daily. Subsequent titles were developed under the supervision of brothers Dan and Sam Houser, Leslie Benzies, and Aaron Garbutt. The game was primarily developed by British developer Rockstar North, and published by its parent company Rockstar Games",
    },
    {
        gameName : "Battlefield-4",
        gameImg : "imges/battlefield-4-china-rising-pc-game-ea-app-cover.jpg",
        gamePrice: 16,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "Battlefield 4 is a first-person shooter video game and the fourth part of the Battlefield series, published by Electronic Arts and developed by Digital Illusions CE. It was fully revealed at the GDC 2013 conference held in San Francisco on March 26, 2013.",
    },
    {
        gameName : "Call Of Duty",
        gameImg : "imges/call-of-duty-slipstream-pc-game-cover.jpg",
        gamePrice: 39,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "Call of Duty ; Call of Duty is an award-winning first-person shooter game series. The series launched on PC, then expanded to console and mobile systems. Several games were inspired by it and released simultaneously with it",
    },
    {
        gameName : "Ea Sport",
        gameImg : "imges/ea-sports-fc-24-pc-game-ea-app-cover.jpg",
        gamePrice: 22,
        gameInp : 1,
        gameGenre : "Action",
        gameDescription : "EA Sports is an Electronic Arts brand that creates and develops sports video games, founded in 1991. It has released game series such as: the FIFA series. Most of the games under this brand are developed by EA Canada as well as EA Tiburon and EA Black Box.",
    },
]
let imgSection = document.querySelector("body .The-most-profitable");
let imgCard = document.querySelector("body .The-most-profitable .container .card .img img");
let parCard = document.querySelector("body .The-most-profitable .container .card .text p");
function randomImg () {
    setInterval( _ => {
        let random = Math.floor( Math.random() * randomData.length);
        imgSection.style.backgroundImage = `linear-gradient(#1240f995,#021355c1),url(${randomData[random].gameImg})`
        imgCard.src = randomData[random].gameImg;
        parCard.innerHTML = randomData[random].gameDescription;
    },3000)
}
randomImg()
