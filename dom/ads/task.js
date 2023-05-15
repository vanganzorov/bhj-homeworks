let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let current = rotatorCase.findIndex(i => {
    i.classList.contains('rotator__case_active')
})

remove = () => {
    rotatorCase.forEach(el => {
        el.classList.remove('rotator__case_active');
    });
}

add = (i) => {
    rotatorCase[i].classList.add('rotator__case_active');
}

setInterval(() => {

    remove(current);

    rotator = current == rotatorCase.length - 1 ? current = 0 : current++;

    add(current);

}, 1000);