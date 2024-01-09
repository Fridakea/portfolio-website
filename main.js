function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body element
    document.querySelector('body').classList.toggle('dark-mode');

    // Check if dark mode is enabled and save the state to local storage
    const isDarkModeEnabled = document.querySelector('body').classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled);
}

// Check the local storage on page load and apply dark mode if necessary
// The DOMContentLoaded event is used instead of "load", because it runs BEFORE the css loads.
// Dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', function () {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (isDarkModeEnabled) {
        document.querySelector('body').classList.add('dark-mode');
    }
});

/* Burger menu */
const burgerIcon = document.querySelector(".burger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})

/* Remove menu after one of the links have been clicked */
document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
    burgerIcon.classList.remove("active");
    mobileMenu.classList.remove("active");
}))