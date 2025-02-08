document.addEventListener('DOMContentLoaded', () => {
    // Load components
    const loadComponents = async () => {
        const header = await fetch('/components/header.html').then(res => res.text());
        const footer = await fetch('/components/footer.html').then(res => res.text());
        
        document.querySelector('header').innerHTML = header;
        document.querySelector('footer').innerHTML = footer;
    };

    // Mobile menu toggle
    const initMobileMenu = () => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.hamburger')) {
                document.querySelector('.main-nav').classList.toggle('active');
            }
        });
    };

    // Smooth scroll
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    // Initialize
    const init = async () => {
        await loadComponents();
        initMobileMenu();
        initSmoothScroll();
    };

    init();
});