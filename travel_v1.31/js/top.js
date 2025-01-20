// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Ajouter le bouton flottant en HTML
window.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.createElement('button');
    scrollButton.classList.add('scroll-to-top');
    scrollButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(scrollButton);

    // Ecouteur d'événements pour le clic sur le bouton
    scrollButton.addEventListener('click', scrollToTop);

    // Affichage du bouton au début du scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});
