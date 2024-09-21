document.addEventListener('DOMContentLoaded', () => {
    // Search modal functionality
    const searchIcon = document.querySelector('.logo img');
    const searchModal = document.getElementById('search-modal');
    const closeModal = document.querySelector('.modal .close');
    const searchButton = document.getElementById('search-btn');
    const searchQuery = document.getElementById('search-query');

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            searchModal.style.display = 'none';
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const query = searchQuery.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
            }
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === searchModal) {
            searchModal.style.display = 'none';
        }
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sign-Up functionality
    const signUpForm = document.getElementById('signup-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }

    function handleSignUp(event) {
        event.preventDefault();
        const username = document.getElementById('username-email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        localStorage.setItem('username', username);
        alert('Sign Up successful!');
        window.location.href = 'account.html'; // Redirect to account page
    }

    // Display username and dashboard link
    const username = localStorage.getItem('username');
    const usernameDisplay = document.getElementById('username-display');
    const dashboardLink = document.getElementById('dashboard-link');
    const signInLink = document.getElementById('sign-in-link');
    const signUpLink = document.getElementById('sign-up-link');

    if (username) {
        usernameDisplay.textContent = `Welcome, ${username}!`;
        dashboardLink.style.display = 'inline'; // Show Dashboard link
        signInLink.style.display = 'none'; // Hide Sign In link
        signUpLink.style.display = 'none'; // Hide Sign Up link
    } else {
        usernameDisplay.textContent = 'Guest';
        dashboardLink.style.display = 'none'; // Hide Dashboard link
        signInLink.style.display = 'inline'; // Show Sign In link
        signUpLink.style.display = 'inline'; // Show Sign Up link
    }

    // Sign-out functionality
    const signOutButton = document.getElementById('sign-out');
    if (signOutButton) {
        signOutButton.addEventListener('click', () => {
            localStorage.removeItem('username');
            window.location.href = 'sign-in.html'; // Redirect to sign-in page
        });
    }
});
// Create greeting message
if (username) {
    document.getElementById('greeting').textContent = `Welcome to your Account, ${username}!`;
    document.getElementById('account-message').textContent = 'Thank you for creating an account or logging in.'; // Logged-in message
    // (Rest of the logged-in code)
} else {
    document.getElementById('greeting').textContent = 'Welcome!';
    document.getElementById('account-message').textContent = 'Welcome! Start your journey and explore places you\'ve never been before. Create an account and book now!'; // Logged-out message
    document.getElementById('account-link-container').style.display = 'none'; // Hide account link
}
