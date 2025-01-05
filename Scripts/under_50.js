import { baseurl } from "./baseurl.js";

document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.getElementById("products-cont");

    try {
        const response = await fetch(`${baseurl}/products`);
        const products = await response.json();

        products
            .filter(product => product.price <= 50) // Filter products under $50
            .forEach(product => {
                const productCard = document.createElement("div");
                productCard.id = "product-card";

                productCard.innerHTML = `
                    <img src="${product.image}" alt="Product Image" class="product-img">
                    <h3 class="product-title">${product.title}</h3>
                    <h5 class="product-description">${product.description}</h5>
                    <p class="product-price">$${product.price}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <button class="product-btn" data-id="${product.productId}">Add to Cart</button>
                `;

                productsContainer.appendChild(productCard);
            });

        // Add event listener for Add to Cart buttons
        document.querySelectorAll(".product-btn").forEach(button => {
            button.addEventListener("click", async (event) => {
                const productId = event.target.getAttribute("data-id");
                const selectedProduct = products.find(p => p.productId == productId);

                if (!selectedProduct) {
                    alert("Product not found!");
                    return;
                }

                const userEmail = localStorage.getItem("loggedInUser"); // Get logged-in user email
                if (!userEmail) {
                    alert("Please log in to add products to the cart.");
                    return;
                }

                // Fetch the user data
                const usersResponse = await fetch(`${baseurl}/users`);
                const users = await usersResponse.json();
                const user = users.find(u => u.email === userEmail);

                if (!user) {
                    alert("User not found!");
                    return;
                }

                // Check if product is already in the cart
                if (user.products.some(p => p.productId == productId)) {
                    alert("Product already in cart!");
                    return;
                }

                // Add product to user's cart
                user.products.push(selectedProduct);

                // Update user data on server
                await fetch(`${baseurl}/users/${user.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                });

                alert("Product added to cart!");
            });
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
});