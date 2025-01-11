import { baseurl } from "./baseurl.js";

document.addEventListener("DOMContentLoaded", async () => {
    let productsContainer = document.getElementById("cart-container"); 
    let cartTotal = document.getElementById("cart-total");
    let cartSubtotal = document.getElementById("cart-subtotal");
    let cartTax = document.getElementById("cart-tax");
    let cartShipping = document.getElementById("cart-shipping");
    let cartGrandTotal = document.getElementById("cart-grand-total");
    let logoutButton = document.getElementById("logout-btn");

    try {
        let userEmail = localStorage.getItem("loggedInUser"); // Get logged-in user
        if (!userEmail) {
            alert("Please log in to view your cart.");
            window.location.href = "login.html";
            return;
        }

        let response = await fetch(`${baseurl}/users`);
        let users = await response.json();
        let user = users.find(user => user.email === userEmail);

        if (!user || !user.products || user.products.length === 0) {
            productsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        let totalPrice = 0;
        user.products.forEach((product, index) => {
            totalPrice += product.price;

            let productCard = document.createElement("div");
            productCard.id = "product-card";

            productCard.innerHTML = `
                <img src="${product.image}" alt="Product Image" class="product-img">
                <h3 class="product-title">${product.title}</h3>
                <h5 class="product-description">${product.description}</h5>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            productsContainer.appendChild(productCard);
        });

        // Subtotal Calculation
        cartSubtotal.textContent = `$${totalPrice}`;

        let taxAmount = totalPrice * 0.08;
        cartTax.textContent = `$${taxAmount}`;

        let shippingCost = 5.00;
        cartShipping.textContent = `$${shippingCost}`;

        let grandTotal = totalPrice + taxAmount + shippingCost;
        cartGrandTotal.textContent = `$${grandTotal}`;

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", async (event) => {
                let index = event.target.getAttribute("data-index");

                user.products.splice(index, 1); // Remove product from array

                await fetch(`${baseurl}/users/${user.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...user, products: user.products }),
                });

                location.reload(); // Refresh cart
            });
        });

        document.querySelector(".checkout-btn").addEventListener("click", () => {
            alert("Proceeding to checkout...");
        });

        // Logout functionality
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser"); // Clear user from local storage
            alert("You have been logged out.");
            window.location.href = "login.html"; // Redirect to login
        });

    } catch (error) {
        console.error("Error fetching cart:", error);
    }
});