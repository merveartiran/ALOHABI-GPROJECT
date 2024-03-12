// Get the form element
const loginForm = document.getElementById("account-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the email and password fields
    const emailField = document.getElementById("email");
    const passwordField = document.querySelectorAll("#password-form");
    const passwordConfirm = document.getElementById('password_confirm');
    console.log(passwordConfirm);
    console.log(passwordField);

    // Check if the email field is empty
    if (emailField.value.trim() === "") {
        // Show an error message
        alert("Please enter your email address.");
        return;
    }

    // Check if the email address is valid
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailField.value)) {
        // Show an error message
        alert("Please enter a valid email address.");
        return;
    }

    // Check if the password field is empty
    if (passwordField.value === "") {
        // Show an error message
        alert("Please enter your password.");
        return;
    }

    // Check if the password is at least 8 characters long
    // if (passwordField.value.length < 8) {
    //     // Show an error message
    //     alert("Your password must be at least 8 characters long.");
    //     return;
    // }
    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, and contain at least one special character.');
        return;
    }
    // Check if the passwords match
    if (passwordField.value !== passwordConfirm.value) {
        alert("Passwords do not match!");
    }
    // Create a user object with the data

    // If everything is valid, submit the form
    loginForm.submit();
    alert("your account created successfully!");
});