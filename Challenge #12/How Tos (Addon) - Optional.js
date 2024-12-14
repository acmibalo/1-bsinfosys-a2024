document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.Furniture');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const cart = [];

    const cartPreview = document.createElement("div");
    cartPreview.className = "cart-preview";
    cartPreview.innerHTML = `Cart: <span class="cart-count">0</span> items`;
    cartPreview.addEventListener("click", () => {
        checkoutModal.style.display = "block";
    });
    document.body.appendChild(cartPreview);

    const checkoutModal = document.createElement("div");
    checkoutModal.className = "checkout-modal";
    checkoutModal.innerHTML = `
        <div class="modal-content">
            <h2>Shopping Cart</h2>
            <ul class="cart-items"></ul>
            <div class="cart-total">
                Total Items: <span class="total-count">0</span><br>
                Total Amount: $<span class="total-amount">0.00</span>
            </div>
            <div class="cart-actions">
                <button class="close-modal">Close</button>
                <button class="proceed-checkout">Proceed to Checkout</button>
            </div>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    checkoutModal.querySelector(".close-modal").addEventListener("click", () => {
        checkoutModal.style.display = "none";
    });

    checkoutModal.querySelector(".proceed-checkout").addEventListener("click", () => {
        alert("YAY PURCHASE!");
        cart.length = 0; // Clear the cart
        updateCartDisplay();
        checkoutModal.style.display = "none";
    });

    // Function to update cart display in the modal and preview badge
    const updateCartDisplay = () => {
        const cartItemsContainer = checkoutModal.querySelector(".cart-items");
        const totalCountElement = checkoutModal.querySelector(".total-count");
        const totalAmountElement = checkoutModal.querySelector(".total-amount");
        const cartCountElement = cartPreview.querySelector(".cart-count");

        let totalAmount = 0;

        cartItemsContainer.innerHTML = cart
            .map((item, index) => {
                totalAmount += item.price;
                return `
                    <li>
                        ${item.name} - $${item.price.toFixed(2)}
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </li>`;
            })
            .join("");

        totalCountElement.textContent = cart.length;
        totalAmountElement.textContent = totalAmount.toFixed(2);
        cartCountElement.textContent = cart.length;

        const removeButtons = cartItemsContainer.querySelectorAll(".remove-item");
        removeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const index = parseInt(button.getAttribute("data-index"), 10);
                cart.splice(index, 1); 
                updateCartDisplay();
            });
        });
    };

    productCards.forEach(card => {
        const productName = card.querySelector("h2").textContent;
        const productPrice = parseFloat(card.getAttribute("data-price").replace('$', '').replace(',', ''));

        // Ensure the product price is a valid number
        if (!isNaN(productPrice)) {
            // Create Add to Cart button
            const addButton = document.createElement("button");
            addButton.textContent = "Add to Cart";
            addButton.classList.add("add-to-cart");

            // Add click event with effects and checkout
            addButton.addEventListener("click", () => {
                cart.push({ name: productName, price: productPrice });
                updateCartDisplay();

                alert(`${productName} added to cart!`);

                // Add temporary class for animation
                card.classList.add("added-to-cart-effect");
                setTimeout(() => {
                    card.classList.remove("added-to-cart-effect");
                }, 1000);

                // Create a floating cart icon effect
                const floatingIcon = document.createElement("div");
                floatingIcon.className = "floating-cart-icon";
                floatingIcon.textContent = "🛒";

                const rect = addButton.getBoundingClientRect();
                floatingIcon.style.left = `${rect.left + window.scrollX}px`;
                floatingIcon.style.top = `${rect.top + window.scrollY}px`;

                document.body.appendChild(floatingIcon);

                setTimeout(() => {
                    floatingIcon.style.transform = "translateY(-100px) scale(0)";
                    floatingIcon.style.opacity = "0";
                }, 10);

                setTimeout(() => {
                    floatingIcon.remove();
                }, 1000);
            });

            // Append the button to the product card
            card.appendChild(addButton);
        } else {
            console.error(`Invalid price for product: ${productName}`);
        }
    });
});