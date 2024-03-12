//login page validation
// Get form elements
const form = document.getElementById('button-login');
console.log(form);
const username = document.getElementById('username');
console.log(username);
const password = document.getElementById('password');
console.log(password);

// Add event listener for form submission
form.addEventListener('click', (e) => {
    e.preventDefault();

    // Validate username and password
    if (username.value.trim() === '') {
        alert('Please enter a username.');
        return;
    }

    if (password.value.trim() === '') {
        alert('Please enter a password.');
        return;
    }
    if (username.value.length < 6) {
        alert('Username must be at least 6 characters long.');
        return;
    }
    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, and contain at least one special character.');
        return;
    }
    // If validation passes, submit the form
    // form.submit();
});