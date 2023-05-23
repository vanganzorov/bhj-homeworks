const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach((elem) => {
    let text = elem.title;
    let tmpl = `<div class="tooltip" style="left: 0; top: 0" data-position="bottom">${text}</div>`;
    elem.insertAdjacentHTML('afterEnd', tmpl);
});

const tooltips = document.querySelectorAll('.tooltip');
for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltips[i].addEventListener('click', (e) => { 
        e.preventDefault();

        if (tooltips[i].classList.contains('tooltip_active')) {
            tooltips[i].classList.remove('tooltip_active');
        }
        else {
            if (document.querySelector('.tooltip_active')) {
                document.querySelector('.tooltip_active').classList.remove('tooltip_active');
            }
            tooltips[i].classList.add('tooltip_active');
        }

        let active = document.querySelector('.tooltip_active');
        let pos = hasTooltips[i].getBoundingClientRect();

        if (tooltips[i].classList.contains('tooltip_active')) {
            switch (tooltips[i].dataset.position) {
                case 'top':
                    tooltips[i].style = `left: ${pos.left}px; top: ${pos.top - active.offsetHeight}px`;
                    break;

                case 'left':
                    let left = pos.left + pos.width;
                    let topL = pos.top;
                    if (left > window.innerWidth) {
                        left = window.innerWidth - active.offsetWidth;
                        topL = pos.bottom;
                    }
                    tooltips[i].style = `left: ${left}px; top: ${topL}px`;
                    break;

                case 'right':
                    let right = pos.right - pos.width - active.offsetWidth;
                    let topR = pos.top;
                    if (right < 0) {
                        right = 0;
                        top = pos.bottom;
                    }
                    tooltips[i].style = `left: ${right}px; top: ${topR}px`;
                    break;

                case 'bottom':
                    tooltips[i].style = `left: ${pos.left}px; top: ${pos.bottom}px`;
                    break;
            }
        }
    });
}