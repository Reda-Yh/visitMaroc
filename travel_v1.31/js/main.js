if (window.innerWidth > 969) {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 75,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#b01a14';
            navbar.style.opacity = 0.8;

            navbar.classList.remove('bg-transparent');

            navLinks.forEach(link => {
                link.style.color = 'var(--yellow-color)'; 
            });
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.opacity = 1;

            navbar.classList.add('bg-transparent');

            navLinks.forEach(link => {
                link.style.color = 'white';
            });
        }
    });

    // Ensure navbar starts with transparent background
    if (window.scrollY === 0) {
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-dark');

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.style.color = ''; 
        });
    }
}
