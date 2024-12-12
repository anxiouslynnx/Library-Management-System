// Toggle burger menu
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle login and logout
document.getElementById('login-btn').addEventListener('click', () => {
    // Placeholder for login logic
    alert('Login functionality here');
});

document.getElementById('logout-btn').addEventListener('click', () => {
    // Placeholder for logout logic
    alert('Logged out');
});


// Register Form Validation
const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Placeholder for form submission logic
        alert(`Registered successfully!\nName: ${name}\nEmail: ${email}`);
    });
}

// Login Form Submission (Placeholder)
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Placeholder for login logic
        alert(`Logged in successfully!\nEmail: ${email}`);
    });
}
