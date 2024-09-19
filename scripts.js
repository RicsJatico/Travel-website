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
                // Implement actual search logic here
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

    let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}


document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

    // Sign-Up page functionality
    const signUpForm = document.getElementById('sign-up-form');

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            alert('Sign Up successful!');
            // Optionally redirect or perform other actions here
        });
    }

    // Handle social sign-up buttons
    const facebookSignup = document.getElementById('facebook-signup');
    const gmailSignup = document.getElementById('gmail-signup');

    if (facebookSignup) {
        facebookSignup.addEventListener('click', () => {
            alert('Facebook sign-up not implemented.');
        });
    }

    if (gmailSignup) {
        gmailSignup.addEventListener('click', () => {
            alert('Gmail sign-up not implemented.');
        });
    }
});
