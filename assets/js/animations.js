// animations.js - Animation scripts for Rwanda Police SPS Portal

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleClass: "visible"
            }
        });
    });
    
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });
    
    // Animate quick access buttons
    const quickAccessCards = document.querySelectorAll('.quick-access-card');
    quickAccessCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });
    
    // Animate news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });
    
    // Statistics counter animation
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        const statNumber = card.querySelector('.stat-number');
        const targetValue = parseInt(statNumber.getAttribute('data-count'));
        
        gsap.to(statNumber, {
            textContent: targetValue,
            duration: 2,
            delay: index * 0.2,
            ease: "power2.out",
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            onStart: function() {
                card.style.opacity = 1;
            }
        });
    });
    
    // Feature sections animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
        const imgBox = card.querySelector('.picture-box');
        const textBox = card.querySelector('.description-section');
        
        gsap.from(imgBox, {
            opacity: 0,
            x: card.classList.contains('reverse') ? 50 : -50,
            duration: 0.7,
            scrollTrigger: {
                trigger: card,
                start: "top 75%"
            }
        });
        
        gsap.from(textBox, {
            opacity: 0,
            x: card.classList.contains('reverse') ? -50 : 50,
            duration: 0.7,
            delay: 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top 75%"
            }
        });
    });
    
    // Parallax effect for background video
    gsap.to('.background-container', {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero-section',
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
});