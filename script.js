// You can add interactivity using JavaScript, e.g., animations for webshooters

// Example: Add a spinning animation to webshooters
const webshooterContainer = document.getElementById('webshooter-container');

webshooterContainer.addEventListener('mouseenter', () => {
    webshooterContainer.style.animation = 'spin 1s linear infinite';
});

webshooterContainer.addEventListener('mouseleave', () => {
    webshooterContainer.style.animation = 'none';
});
