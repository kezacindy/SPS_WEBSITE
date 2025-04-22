// assets/js/animations.js

document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Header animation on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3D Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    const heroTitle = document.querySelector('.animate-title');
    
    heroSection.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        heroTitle.style.transform = `translateZ(50px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset transform when mouse leaves
    heroSection.addEventListener('mouseleave', () => {
        heroTitle.style.transform = 'translateZ(50px)';
    });

    // Scroll animations using GSAP
    // Fade in animation for sections
    gsap.utils.toArray('.section-container').forEach(section => {
        gsap.fromTo(section, 
            { y: 50, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // 3D tilt effect for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            const xRotation = (yPercent - 0.5) * 10;
            const yRotation = (0.5 - xPercent) * 10;
            
            this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === 'index.html') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3D tilt effect for the info box
    const infoBox = document.querySelector('.info-box');
    
    if (infoBox) {
        infoBox.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            const xRotation = (yPercent - 0.5) * 5;
            const yRotation = (0.5 - xPercent) * 5;
            
            this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
        
        infoBox.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }

    // Fix existing language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    const translateElements = document.querySelectorAll('.translate');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLanguage = this.getAttribute('data-current') || 'en';
            const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
            
            // Toggle language for all elements
            translateElements.forEach(element => {
                const translation = element.getAttribute(`data-${newLanguage}`);
                if (translation) {
                    element.innerText = translation;
                }
            });
            
            // Update language button text
            this.innerText = this.getAttribute(`data-${newLanguage}`);
            this.setAttribute('data-current', newLanguage);
        });
    }
});