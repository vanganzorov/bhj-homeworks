let cartProducts = document.querySelector('.cart__products');
let productQuantityControls = Array.from(document.querySelectorAll('.product__quantity-controls'));

let productsQuantityValue = () => {
    productQuantityControls.forEach(el => {
        let productQuantityValue = el.children[1];
        el.addEventListener('click', (event) => {
            if (event.target.classList.contains('product__quantity-control_dec')) {
                if (productQuantityValue.classList.contains('product__quantity-value') && productQuantityValue.textContent > 1) {
                    productQuantityValue.innerHTML = productQuantityValue.textContent - 1
                }
            } else if (event.target.classList.contains('product__quantity-control_inc')) {
                productQuantityValue.innerHTML = +productQuantityValue.textContent + 1
            }
        })

        let addButton = el.nextElementSibling;
        if (addButton && addButton.classList.contains('product__add')) {
            addButton.addEventListener('click', () => {

                let productImage = el.closest('.product').children[1].src;
                let dataId = el.closest('.product').getAttribute('data-id');

                let cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.setAttribute('id', dataId);
                cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productQuantityValue.textContent}</div>`

                let arrCartProduct = Array.from(cartProducts.children);

                let coincidences = arrCartProduct.find(item => item.getAttribute('id') === dataId);
                if (arrCartProduct.length > 0 && coincidences) {
                    let cartProductCount = coincidences.lastElementChild;
                    cartProductCount.textContent = (+cartProductCount.textContent) + (+productQuantityValue.textContent);
                    return
                }
                cartProducts.appendChild(cartProduct)
            })
        }
    })
};

productsQuantityValue();