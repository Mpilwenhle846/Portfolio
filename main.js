   // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    document.getElementById('nav-toggle').checked = false;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Scroll animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            // Animate hero section on page load
            setTimeout(function() {
                const heroElements = document.querySelectorAll('.hero .animate-up');
                heroElements.forEach(el => {
                    el.classList.add('active');
                });
            }, 300);
            
            // Create Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);
            
            // Observe all elements with animation classes
            const animatedElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-rotate, .animate-fade');
            animatedElements.forEach(el => {
                observer.observe(el);
            });
        });