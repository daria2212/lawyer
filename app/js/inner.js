//  Script for modal

let connectLink = document.querySelector('.inner-header__button');
let popup = document.querySelector('.modal');
let overlay = document.querySelector('.modal-overlay');
let close = document.querySelector('.modal__close');

connectLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('overlay-show');
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
})

overlay.addEventListener('click', function () {
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove('modal-show');
        overlay.classList.remove('overlay-show');
    }
});