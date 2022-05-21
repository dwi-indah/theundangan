let navbar = document.querySelector("nav");
// let scrollPrev = window.pageYOffset;
const sectionArray = document.querySelectorAll('.scrollspy');
const sectionPosition = {};
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll(".navbar-menu a");

console.log(navLinks);
console.log(navMenu);

function closeEvent() {
    navLinks.forEach(el => el.addEventListener('click', closeMenu));
}

function closeMenu() {
    navMenu.classList.toggle('navclose');
}

sectionArray.forEach((section) => {
    sectionPosition[section.id] = section.offsetTop;
});

window.onscroll = () => {
    // let screenOffset = window.pageYOffset;

    // if(scrollPrev > screenOffset) {
    //     navbar.style.top = '0px';
    //     navbar.classList.add('sticky');
    // } else {
    //     navbar.style.top = '-90px';
    //     navbar.classList.remove('sticky');
    // }

    // scrollPrev = screenOffset;

    // if(scrollPrev == 0) {
    //     navbar.classList.remove('sticky');
    // }


   
    let scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 200;
    for (id in sectionPosition) {
        if(sectionPosition[id] <= scrollPosition) {
            
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`a[href*=${id}]`).classList.add('active');
        } 
    }
}

closeEvent();