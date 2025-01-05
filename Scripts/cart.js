import { baseurl } from "./baseurl.js";

document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.getElementById("cart-container"); // Use the correct container id
    const cartTotal = document.getElementById("cart-total");
    const cartSubtotal = document.getElementById("cart-subtotal"); // Add for subtotal
    const cartTax = document.getElementById("cart-tax"); // Add for tax (optional)
    const cartShipping = document.getElementById("cart-shipping"); // Add for shipping (optional)
    const cartGrandTotal = document.getElementById("cart-grand-total"); // Add for grand total

    try {
        const userEmail = localStorage.getItem("loggedInUser"); // Get logged-in user
        if (!userEmail) {
            alert("Please log in to view your cart.");
            window.location.href = "login.html";
            return;
        }

        const response = await fetch(`${baseurl}/users`);
        const users = await response.json();
        const user = users.find(user => user.email === userEmail);

        if (!user || !user.products || user.products.length === 0) {
            productsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        let totalPrice = 0;
        user.products.forEach((product, index) => {
            totalPrice += product.price;

            const productCard = document.createElement("div");
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
        cartSubtotal.textContent = `$${totalPrice.toFixed(2)}`;

        // Example: Calculate Tax (e.g., 8%)
        const taxAmount = totalPrice * 0.08; // 8% tax
        cartTax.textContent = `$${taxAmount.toFixed(2)}`;

        // Example: Shipping Cost (e.g., $5)
        const shippingCost = 5.00; // Flat shipping rate
        cartShipping.textContent = `$${shippingCost.toFixed(2)}`;

        // Grand Total (Subtotal + Tax + Shipping)
        const grandTotal = totalPrice + taxAmount + shippingCost;
        cartGrandTotal.textContent = `$${grandTotal.toFixed(2)}`;

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", async (event) => {
                const index = event.target.getAttribute("data-index");

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

    } catch (error) {
        console.error("Error fetching cart:", error);
    }
});
