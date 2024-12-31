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
        navbar.style.backgroundColor = 'var(--semi-dark-color)';
        navbar.style.opacity = 0.7;

        navbar.classList.remove('bg-transparent');
        // navbar.classList.add('bg-dark');

        navLinks.forEach(link => {
            link.style.color = 'white'; // Couleur très blanche
        });
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.opacity = 1;
        
        navbar.classList.add('bg-transparent');
        // navbar.classList.remove('bg-dark');

        navLinks.forEach(link => {
            link.style.color = ''; // Revenir à la couleur par défaut
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
        link.style.color = ''; // Couleur initiale
    });
}