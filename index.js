

const myCarousel = document.querySelector('#carouselExampleIndicators1')
const carousel = new bootstrap.Carousel(myCarousel)

const menu = document.querySelectorAll('.nav-item')
menu.forEach((elem) => {
    elem.addEventListener('click', function () {
        document.querySelector('.navbar-toggler').click();
        elem.querySelector('.nav-link').classList.add('active');
    })
})

const hambur = document.querySelector('.navbar-toggler')
hambur.addEventListener('click', function () {
    document.querySelector('.navbar-toggler-icon').classList.toggle('active');
    document.querySelector('.header__logo.desktop').classList.toggle('active')
    document.querySelector('.header__logo.mob').classList.toggle('active')
})

