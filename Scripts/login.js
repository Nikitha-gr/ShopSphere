import { baseurl } from "./baseurl.js";

document.getElementById("login-submit").addEventListener("click", async (event) => {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

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
                window.location.href = "index.html";
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("No email found. Please sign up.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
    }
});

document.getElementById("signup-submit").addEventListener("click", async (event) => {
    event.preventDefault();

    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        // Fetch existing users to check for duplicate email
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

        // Proceed with signup if email does not exist
        response = await fetch(`${baseurl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert("Signup successful! Pleases log in.");
        } else {
            alert("Failed to sign up.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again.");
    }
});