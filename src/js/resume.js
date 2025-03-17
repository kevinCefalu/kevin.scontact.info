/**
 * Resume Interactivity for Kevin Cefalu
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

  // Initialize animations for sections
    function initAnimations() {
        const sections = document.querySelectorAll('section');

        // Create an Intersection Observer to trigger animations when scrolling
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe each section
        sections.forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });
    }

    // Print functionality
    function setupPrintButton() {
        const printButton = document.getElementById('print-resume');
        if (printButton) {
            printButton.addEventListener('click', function() {
                window.print();
            });
        }
    }

    // Initialize all functions
    initAnimations();
    setupPrintButton();
});