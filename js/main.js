// ===================================
// Main JavaScript - Business Intelligence Website
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger to X
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingNav = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingNav) {
                    correspondingNav.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Intersection Observer for Fade-in Animations
    // ===================================
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
    
    // ===================================
    // Newsletter Form Submission
    // ===================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value;
            
            if (email) {
                // Show success message (you can customize this)
                alert('شكراً لاشتراكك! سنقوم بالتواصل معك قريباً.');
                emailInput.value = '';
                
                // Here you would typically send the email to your backend
                console.log('Newsletter subscription:', email);
            }
        });
    }
    
    // ===================================
    // Dynamic Year in Footer
    // ===================================
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} ذكاء الأعمال للاستشارات. جميع الحقوق محفوظة.`;
    }
    
    // ===================================
    // Parallax Effect for Hero Section
    // ===================================
    const heroSection = document.querySelector('.hero');
    const floatingShapes = document.querySelector('.floating-shapes');
    
    if (heroSection && floatingShapes) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            
            if (scrolled < heroBottom) {
                floatingShapes.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
    
    // ===================================
    // Service Cards Stagger Animation
    // ===================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // ===================================
    // Client Cards Hover Effect Enhancement
    // ===================================
    const clientCards = document.querySelectorAll('.client-card');
    
    clientCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            clientCards.forEach(c => {
                if (c !== this) {
                    c.style.opacity = '0.7';
                    c.style.transform = 'scale(0.95)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            clientCards.forEach(c => {
                c.style.opacity = '1';
                c.style.transform = 'translateY(0)';
            });
        });
    });
    
    // ===================================
    // Language Switcher (Placeholder Functionality)
    // ===================================
    const langSwitcher = document.querySelector('.lang-switcher');
    
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            // This is a placeholder - implement actual language switching logic
            alert('ميزة تغيير اللغة قيد التطوير - Language switch feature coming soon!');
            
            // Future implementation would:
            // 1. Toggle between RTL and LTR
            // 2. Load English/Arabic content
            // 3. Update font families
            // 4. Save preference in localStorage
        });
    }
    
    // ===================================
    // Performance Optimization: Lazy Loading Images
    // ===================================
    // (Add lazy loading to images if you add any later)
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===================================
    // Add Loading State to Buttons
    // ===================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove loading state from all buttons
            document.querySelectorAll('.btn').forEach(btn => {
                btn.disabled = false;
            });
        });
    });
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%cذكاء الأعمال للاستشارات', 'font-size: 24px; font-weight: bold; color: #1E40AF;');
    console.log('%cمرحباً بك في موقعنا الإلكتروني!', 'font-size: 14px; color: #3B82F6;');
    console.log('%cBusiness Intelligence Consulting', 'font-size: 14px; color: #06B6D4;');
    
    // ===================================
    // Analytics Tracking (Placeholder)
    // ===================================
    // Add your analytics tracking code here
    // Example: Google Analytics, Facebook Pixel, etc.
    
    console.log('Analytics: Page loaded successfully');
    
});

// ===================================
// Additional Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions if needed for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { debounce, throttle, isInViewport };
}
