// Main JS file for LYORE ABAYA
// =============================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize translation system FIRST to ensure translations apply before page becomes visible
    // This must happen before any other initialization to prevent content flashing
    TranslationManager.init();

    console.log('LYORE ABAYA Loaded');

    // Mobile menu toggle (placeholder for future functionality)
    const menuButton = document.querySelector('header button');
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            console.log('Menu clicked - add mobile nav logic here');
        });
    }
});
