let smallBookLink = document.querySelector('.font-size_small');
let normalBookLink = document.querySelector('.font-size_active');
let bigBookLink = document.querySelector('.font-size_big');
let bookFont = document.querySelector('.book');


smallBookLink.addEventListener('click', function (event) {
    event.preventDefault();
    bookFont.classList.remove('font-size_big');
    bookFont.classList.add('font-size_small');
    normalBookLink.classList.remove('font-size_active');
    bigBookLink.classList.remove('font-size_active');
    smallBookLink.classList.add('font-size_active');
});

normalBookLink.addEventListener('click', function (event) {
    event.preventDefault();
    bookFont.classList.remove('font-size_big', 'font-size_small');
    bookFont.classList.add('font-size_active');
    smallBookLink.classList.remove('font-size_active');
    bigBookLink.classList.remove('font-size_active');
    normalBookLink.classList.add('font-size_active');

});

bigBookLink.addEventListener('click', function (event) {
    event.preventDefault();
    bookFont.classList.remove('font-size_small');
    bookFont.classList.add('font-size_big');
    normalBookLink.classList.remove('font-size_active');
    smallBookLink.classList.remove('font-size_active');
    bigBookLink.classList.add('font-size_active');
});