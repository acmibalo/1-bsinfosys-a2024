// Toggle the submenu visibility when hovering over 'Products' or 'Blogs'
const productMenu = document.querySelector('.menu-item:nth-child(2)');
const blogMenu = document.querySelector('.menu-item:nth-child(3)');

function toggleSubMenu(menu) {
    menu.addEventListener('mouseenter', () => {
        menu.querySelector('.submenu').style.display = 'block';
    });
    menu.addEventListener('mouseleave', () => {
        menu.querySelector('.submenu').style.display = 'none';
    });
}

// Apply hover functionality to menus
toggleSubMenu(productMenu);
toggleSubMenu(blogMenu);

// Cart variables
let cart = [];
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const cartSection = document.getElementById("cart-section");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const placeOrderButton = document.getElementById("place-order");
const orderList = document.getElementById("order-list");
const paymentMethodSection = document.getElementById("payment-method-section");
const paymentMessage = document.getElementById("payment-message");

// Add to Cart Functionality
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        const price = parseFloat(this.getAttribute("data-price"));

        // Add to cart array
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCartDisplay();
    });
});

// Update Cart Display
function updateCartDisplay() {
    // Update cart count
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update cart items
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-item");
        removeButton.addEventListener("click", () => removeItemFromCart(index)); // Call removeItemFromCart with the item's index

        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });

    // Update total
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Remove item from cart
function removeItemFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);

    // Update the cart display
    updateCartDisplay();
}

// Show/Hide Cart Section
cartIcon.addEventListener("click", () => {
    cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
});

// Place Order Functionality
placeOrderButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Save the order to localStorage
    saveOrder(cart);

    // Clear cart
    alert("Thank you for your order!");
    cart = [];
    updateCartDisplay();
    cartSection.style.display = "none";

    // Refresh order history
    displayOrderHistory();

    // Show payment method options
    paymentMethodSection.style.display = "block";
    paymentMessage.textContent = "Choose a payment method: Credit Card, PayPal, or Bank Transfer";
});

// Save Order to LocalStorage
function saveOrder(cartItems) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        items: cartItems,
        date: new Date().toLocaleString(),
    });
    localStorage.setItem("orders", JSON.stringify(orders));
}

// Display Order History
function displayOrderHistory() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Clear current order list
    orderList.innerHTML = "";

    if (orders.length === 0) {
        orderList.innerHTML = "<p>No orders placed yet.</p>";
        return;
    }

    // Generate order history HTML
    orders.forEach((order, index) => {
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("order");

        const orderDetails = `
            <h3>Order #${index + 1}</h3>
            <p><strong>Date:</strong> ${order.date}</p>
            <ul>
                ${order.items.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join("")}
            </ul>
        `;
        orderDiv.innerHTML = orderDetails;
        orderList.appendChild(orderDiv);
    });
}

// Load Order History on Page Load
document.addEventListener("DOMContentLoaded", displayOrderHistory);

// Payment Method Section (Example)
document.getElementById("payment-method-section").addEventListener("click", function (event) {
    if (event.target && event.target.matches("button.payment-method")) {
        const paymentMethod = event.target.textContent;
        alert(`You chose ${paymentMethod} as your payment method. Please proceed with the instructions on the payment page.`);

        // Close the payment method section after selecting
        paymentMethodSection.style.display = "none";
    }
});
// After the user places an order, show the payment method options
placeOrderButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Save the order to localStorage
    saveOrder(cart);

    // Clear cart
    alert("Thank you for your order!");
    cart = [];
    updateCartDisplay();
    cartSection.style.display = "none";

    // Refresh order history
    displayOrderHistory();

    // Show payment method options
    paymentMethodSection.style.display = "block";  // Make payment section visible
    paymentMessage.textContent = "Choose a payment method: Credit Card, PayPal, or Bank Transfer";
});
// JavaScript to toggle visibility of How To items
document.addEventListener('DOMContentLoaded', function () {
    const howToItems = document.querySelectorAll('.how-to-item');

    howToItems.forEach(item => {
        const heading = item.querySelector('h3');
        heading.addEventListener('click', () => {
            const content = item.querySelector('ul');
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
