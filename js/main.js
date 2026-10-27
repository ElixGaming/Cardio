// js/main.js - VERSION DÉFENSIVE (Attend applyTranslations)
(function() {
    'use strict';
    console.log('[main] Script loaded. Waiting for applyTranslations...');

    function waitForTranslations(cb) {
        if (typeof window.applyTranslations === 'function') {
            cb();
        } else {
            setTimeout(() => waitForTranslations(cb), 50);
        }
    }

    function init() {
        console.log('[main] Initializing UI...');

        // 1. Language Switcher
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            // Met à jour le texte du bouton selon la langue ACTUELLE du DOM
            const currentLang = document.documentElement.lang || 'fr';
            langToggle.textContent = window.translations[currentLang]?.lang_label || currentLang.toUpperCase();

            langToggle.addEventListener('click', () => {
                const currentLang = document.documentElement.lang || 'fr';
                const newLang = currentLang === 'fr' ? 'ar' : 'fr';
                localStorage.setItem('siteLang', newLang);
                window.applyTranslations(newLang);
                langToggle.textContent = window.translations[newLang]?.lang_label || newLang.toUpperCase();
            });
        } else {
            console.warn('[main] #lang-toggle NOT FOUND in DOM.');
        }

        // 2. Mobile Menu
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                const isOpen = navLinks.classList.toggle('active');
                menuToggle.setAttribute('aria-expanded', isOpen);
                menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }));
        }

        // 3. Header Scroll
        const header = document.querySelector('.header');
        if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

        // 4. Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        });

        // 5. Animations
        const animatedEls = document.querySelectorAll('.card, .conseil-item, .info-card, .rdv-card, .section-header');
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            animatedEls.forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;
                obs.observe(el);
            });
        } else { animatedEls.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; }); }

        console.log('[main] Ready.');
    }

    // Démarrage
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => waitForTranslations(init));
    } else {
        waitForTranslations(init);
    }
})();
