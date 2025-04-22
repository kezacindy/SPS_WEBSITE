// assets/js/language.js
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    
    // Check if there's a saved language preference
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    // Initialize with saved preference
    changeLanguage(currentLanguage);
    
    // Function to change language
    function changeLanguage(language) {
        const elements = document.querySelectorAll('.translate');
        
        elements.forEach(element => {
            if (element.dataset[language]) {
                element.textContent = element.dataset[language];
            }
        });
        
        // Update button text
        languageToggle.textContent = languageToggle.dataset[language];
        
        // Update HTML lang attribute
        document.documentElement.lang = language;
        
        // Store the current language in local storage
        localStorage.setItem('language', language);
        currentLanguage = language;
    }

    // Event listener for language toggle button
    languageToggle.addEventListener('click', function() {
        const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        changeLanguage(newLanguage);
    });
});