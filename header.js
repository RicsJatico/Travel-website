document.addEventListener('DOMContentLoaded', () => {
    // Retrieve user information from local storage
    const username = localStorage.getItem('username');
    const userEmail = localStorage.getItem('userEmail');

    // Get references to HTML elements
    const usernameDisplay = document.getElementById('username-display');
    const dashboardLink = document.getElementById('dashboard-link');
    const signInLink = document.getElementById('sign-in-link');
    const signUpLink = document.getElementById('sign-up-link');

    // Check if the user is signed in
    if (username) {
        // Display the username and show the Dashboard link
        usernameDisplay.textContent = `Welcome, ${username}!`;
        dashboardLink.style.display = 'inline'; // Show the Dashboard link
        signInLink.style.display = 'none'; // Hide Sign In link
        signUpLink.style.display = 'none'; // Hide Sign Up link
    } else {
        // If not signed in, show default options
        usernameDisplay.textContent = 'Guest';
        dashboardLink.style.display = 'none'; // Hide Dashboard link
        signInLink.style.display = 'block'; // Show Sign In link
        signUpLink.style.display = 'block'; // Show Sign Up link
    }

    // Handle sign-out button click
    const signOutButton = document.getElementById('sign-out');
    if (signOutButton) {
        signOutButton.addEventListener('click', () => {
            // Clear user data and redirect to sign-in page
            localStorage.removeItem('username'); // Remove username from local storage
            localStorage.removeItem('userEmail'); // Remove email from local storage
            window.location.href = 'sign-in.html';
        });
    }
});
