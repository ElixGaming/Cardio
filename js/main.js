// js/main.js
document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTION LANGUE (Persistance localStorage)
    const langToggle = document.getElementById('lang-toggle');
    const savedLang = localStorage.getItem('siteLang') || 'fr'; // Défaut FR
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'fr' ? 'ar' : 'fr';
            setLanguage(newLang);
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('siteLang', lang);
        applyTranslations(lang); // Défini dans translations.js
        
        // Mise à jour texte bouton toggle
        if (langToggle) langToggle.textContent = translations[lang].lang_label;
        
        // Force reflow pour transition RTL/RTL fluide
        document.body.style.opacity = '0';
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    }

    // 2. MENU MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        // Fermer au clic sur lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // 3. HEADER SCROLL EFFECT
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }, { passive: true });

    // 4. ACTIVE NAV LINK ON SCROLL (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    const navLinksItems = document.querySelectorAll('.nav-links a[href^="#"]');
    if (sections.length && navLinksItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinksItems.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.1 });
        sections.forEach(s => observer.observe(s));
    }

    // 5. ANIMATIONS AU SCROLL (Intersection Observer)
    const animatedElements = document.querySelectorAll('.card, .conseil-item, .info-card, .rdv-card, .service-item, .section-header');
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.7s ease ${i * 0.05}s, transform 0.7s ease ${i * 0.05}s`;
        animObserver.observe(el);
    });

    // 6. SMOOTH SCROLL ANCRES INTERNES
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // 7. LAZY LOAD IMAGES (Native support fallback)
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => img.src = img.dataset.src || img.src);
    }
});