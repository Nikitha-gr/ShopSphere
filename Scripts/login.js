import { baseurl } from "./baseurl.js";

document.getElementById("login-submit").addEventListener("click", async (event) => {
    event.preventDefault();

    let emailInput = document.getElementById("login-email");
    let passwordInput = document.getElementById("login-password");

    let email = emailInput.value;
    let password = passwordInput.value;

    try {
        let response = await fetch(`${baseurl}/users`);

        if (!response.ok) {
            alert("Failed to fetch users. Please try again later.");
            return;
        }

        let users = await response.json();
        let matchingUsers = users.filter((user) => user.email === email);

        if (matchingUsers.length > 0) {
            let user = matchingUsers[0];
            if (user.password === password) {
                alert("Login success!");
                localStorage.setItem("loggedInUser", email);
                emailInput.value = "";
                passwordInput.value = "";
                window.location.href = "index.html";
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("No email found. Please sign up.");
            emailInput.value = "";
            passwordInput.value = "";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
    }
});

document.getElementById("signup-submit").addEventListener("click", async (event) => {
    event.preventDefault();

    let emailInput = document.getElementById("signup-email");
    let passwordInput = document.getElementById("signup-password");
    let confirmPasswordInput = document.getElementById("signup-confirm-password");

    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    let products = [];

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        let response = await fetch(`${baseurl}/users`);

        if (!response.ok) {
            alert("Failed to fetch users. Please try again later.");
            return;
        }

        let users = await response.json();
        let emailExists = users.some((user) => user.email === email);

        if (emailExists) {
            alert("Email already exists. Please log in.");
            return;
        }

        response = await fetch(`${baseurl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, products }),
        });

        if (response.ok) {
            alert("Signup successful! Please log in.");
            emailInput.value = "";
            passwordInput.value = "";
            confirmPasswordInput.value = "";

            document.getElementById("login-form").style.display = "block";
            document.getElementById("signup-form").style.display = "none";
        } else {
            alert("Failed to sign up.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
    }
});