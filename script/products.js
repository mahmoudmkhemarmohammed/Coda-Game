import { btnScroller , footer , header} from "./data.js"
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
let listFilter = document.querySelectorAll("body .game-filter .container .list ul li");
let cards = document.querySelectorAll("body .game-filter .container .games .card");
listFilter.forEach( li => {
    li.onclick = function() {
        listFilter.forEach( e => {
            e.classList.remove("active");
            cards.forEach( card => {
                card.style.display = 'none'
            })
            document.querySelectorAll(this.dataset.filter).forEach( el => {
                el.style.display = 'block';
                setTimeout(() => {
                    el.style.opacity = '0';
                    el.style.filter = 'blur(30px)'
                    el.style.scale = '.1';
                    setTimeout(() => {
                        el.style.opacity = '1'
                        el.style.filter = 'blur(0px)'
                        el.style.scale = '1'
                    },400)
                },0)
            })
        })
        this.classList.add("active")
    }
})
let btnAll = document.querySelectorAll("body .game-filter .container .games .card .text button");
btnAll.forEach( ( btn , index ) => {
    btn.onclick = () => {
        localStorage.setItem("card",JSON.stringify(index));
        location.assign("details.html")
    }
})