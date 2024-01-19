const productAll = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

productAll.forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const addToCartBtn = product.querySelector('.product__add');

  addToCartBtn.addEventListener('click', (event) => {
    const productDataId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image').src;
    const productCount = parseInt(quantityValue.textContent);

    if (productCount >= 1) {
      const cartItem = cart.querySelector(`.cart__product[data-id="${productDataId}"]`);

      if (cartItem) {
        const cartItemCount = parseInt(cartItem.querySelector('.cart__product-count').textContent);
        cartItem.querySelector('.cart__product-count').textContent = cartItemCount + productCount;
      } else {
        const cartProduct = document.createElement('div');

        cartProduct.classList.add('cart__product');
        /** задает атрибут и ID */
        cartProduct.setAttribute('data-id', productDataId);
        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${productCount}</div>
        `;
        cart.appendChild(cartProduct);
      }
    }
    quantityValue.textContent = '1';
  });
  const quantityControlUp = product.querySelector('.product__quantity-control_inc');
  const quantityControlDown = product.querySelector('.product__quantity-control_dec');
  quantityControlUp.addEventListener('click', (e) => {
    const currentValue = parseInt(quantityValue.textContent);
    if (!isNaN(currentValue)) {
      quantityValue.textContent = currentValue + 1;
    }
  });
  quantityControlDown.addEventListener('click', () => {
    const currentValue = parseInt(quantityValue.textContent);
    if (!isNaN(currentValue) && currentValue > 1) {
      quantityValue.textContent = currentValue - 1;
    }
  });
});
