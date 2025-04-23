// language.js - Language switching functionality

document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'en'; // Default language
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            // Toggle between English and French
            currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
            
            // Update all translatable elements
            document.querySelectorAll('.translate').forEach(function(element) {
                const translation = element.getAttribute(`data-${currentLanguage}`);
                if (translation) {
                    element.textContent = translation;
                }
            });
            
            // Update button text
            languageToggle.textContent = languageToggle.getAttribute(`data-${currentLanguage}`);
            
            // Store language preference in local storage
            localStorage.setItem('preferredLanguage', currentLanguage);
        });
        
        // Check if user has a stored language preference
        const storedLanguage = localStorage.getItem('preferredLanguage');
        if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'fr')) {
            // If stored language is different from current, trigger a language change
            if (storedLanguage !== currentLanguage) {
                currentLanguage = storedLanguage;
                
                // Update all translatable elements
                document.querySelectorAll('.translate').forEach(function(element) {
                    const translation = element.getAttribute(`data-${currentLanguage}`);
                    if (translation) {
                        element.textContent = translation;
                    }
                });
                
                // Update button text
                languageToggle.textContent = languageToggle.getAttribute(`data-${currentLanguage}`);
            }
        }
    }
});