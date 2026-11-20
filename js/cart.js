
/* SMARTTECH ELECTRONICS SHOPPING CART */

let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-button");
const cartDisplay = document.getElementById("cart-count");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.getAttribute("data-product");

        cartCount++;

        if (cartDisplay) {
            cartDisplay.textContent = cartCount;
        }

        alert(productName + " has been added to your cart!");

    });

});
