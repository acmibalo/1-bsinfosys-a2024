document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const cart = [];
    
    // Create a modal for the checkout
    const checkoutModal = document.createElement("div");
    checkoutModal.className = "checkout-modal";
    checkoutModal.innerHTML = `
        <div class="modal-content">
            <h2>Shopping Cart</h2>
            <ul class="cart-items"></ul>
            <button class="close-modal">Close</button>
            <button class="proceed-checkout">Proceed to Checkout</button>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    // Close modal functionality
    checkoutModal.querySelector(".close-modal").addEventListener("click", () => {
        checkoutModal.style.display = "none";
    });

    // Proceed to checkout functionality
    checkoutModal.querySelector(".proceed-checkout").addEventListener("click", () => {
        alert("Thank you for your purchase!");
        cart.length = 0; // Clear the cart
        updateCartDisplay();
        checkoutModal.style.display = "none";
    });

    // Function to update cart display in the modal
    const updateCartDisplay = () => {
        const cartItemsContainer = checkoutModal.querySelector(".cart-items");
        cartItemsContainer.innerHTML = cart
            .map(item[_{{{CITATION{{{_1{](https://github.com/Shivani-mv/InventoryManagement/tree/20c79c38881b01b51b546d8f5aa995d9d209acbb/inv%2Ftemplates%2Ftv3.php)[_{{{CITATION{{{_2{](https://github.com/aayushpandey1703/E-book-portal/tree/60e25016bf444ebd7c3afd14055941280b0590d1/E-Book%20portal%2FHome.php)