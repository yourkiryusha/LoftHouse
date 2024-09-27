const navButton = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navButton.onclick = () => {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-list--mobile');
    document.body.classList.toggle('no-scroll');
}

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [59.943543, 30.338928],
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.943543, 30.338928]);

    myMap.geoObjects.add(myPlacemark);
}