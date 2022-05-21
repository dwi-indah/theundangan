let marriageDate = new Date("Nov 30, 2022 10:00:00").getTime();
let timer = setInterval(tick, 1000);


let navbar = document.querySelector("nav");
let scrollPrev = window.pageYOffset;

function tick() {
    let now = new Date().getTime();
    let timeInterval = marriageDate - now;

    if(timeInterval > 0) {
        let days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
        if(days < 10) {
            days = "0" + days;
        }

        let hours = Math.floor((timeInterval % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        if(hours < 10) {
            hours = "0" + hours;
        }

        let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);
        if(seconds < 10) {
            seconds = "0" + seconds;
        }

        document.querySelector('#days').innerText = days;
        document.querySelector('#hours').innerText = hours;
        document.querySelector('#minutes').innerText = minutes;
        document.querySelector('#seconds').innerText = seconds;
    }
}

const sectionArray = document.querySelectorAll('section');
const sectionPosition = {};

sectionArray.forEach((section) => {
    sectionPosition[section.id] = section.offsetTop;
});

window.onscroll = () => {
    
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    let screenOffset = window.pageYOffset;

    if(mediaQuery.matches) {
        if(scrollPrev > screenOffset) {
            navbar.style.top = '0px';
            navbar.classList.add('sticky');
        } else {
            navbar.style.top = '-90px';
            navbar.classList.remove('sticky');
        }

        scrollPrev = screenOffset;

        if(scrollPrev == 0) {
            navbar.classList.remove('sticky');
        }
    }
                
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (id in sectionPosition) {
        if(sectionPosition[id] <= scrollPosition) {
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`a[href*=${id}]`).classList.add('active');
        } 
    }
}