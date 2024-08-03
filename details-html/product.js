document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productId = product.dataset.id;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            const existingProduct = cartItems.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cartItems.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert(`${productName} has been added to your cart.`);
        });
    });
});
