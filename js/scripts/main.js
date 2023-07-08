//Menu Mobile
const btnMenu = document.getElementById('js-btn-mobile');
const overlayMenu = document.getElementById('js-overlay');
const menuLinks = document.querySelectorAll('.js-menu-links');

function openMenuMobile(){
    document.documentElement.classList.toggle('menu-opened')
}

function closeMenuMobile(event){
    document.documentElement.classList.remove('menu-opened')

    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const initPosition = section.offsetTop;

    window.scrollTo({
        top: initPosition - 150,
        behavior: "smooth"
    })
}

btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);

menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenuMobile)
})


//Menu fixo
const header = document.getElementById('js-header');

function fixedMenu(){
    if(pageYOffset > 80){
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll', fixedMenu);


//ScrollSuave
const scrollSuave = document.querySelectorAll('.js-nav');

function scrollToSection(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const initPosition = section.offsetTop;

    window.scrollTo({
        top: initPosition - 180,
        behavior: "smooth"
    })
}

scrollSuave.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})