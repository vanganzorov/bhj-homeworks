let sliderItem = Array.from(document.querySelectorAll(".slider__item"));
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');


const remove = () => {
    sliderItem.forEach(el => el.classList.remove('slider__item_active'));
}

const add = (i) => {
    sliderItem[i].classList.add('slider__item_active');
}

next.onclick = () => {
    let showItem = sliderItem.findIndex(el => el.classList.contains('slider__item_active'))
    if (showItem == sliderItem.length - 1) {
        showItem = -1;
    }
    remove();
    add(showItem + 1);
}

prev.onclick = () => {
    let showItem = sliderItem.findIndex(el => el.classList.contains('slider__item_active'))
    if (showItem <= 0) {
        showItem = sliderItem.length;
    }
    remove();
    add(showItem - 1);
}