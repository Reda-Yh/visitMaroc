import { destinationsData } from "./data.js";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Fonction pour afficher les destinations populaires
function displayPopularDestinations(data) {
    const destinationsContainer = document.getElementById('destinationsContainer');
    if (!destinationsContainer) {
        console.error('Le conteneur des destinations est introuvable.');
        return;
    }

    destinationsContainer.innerHTML = ''; // Efface le conteneur
    const fragment = document.createDocumentFragment();

    data.filter(destination => destination.popular).forEach(destination => {
        const div = document.createElement('div');
        div.className = "col-md-6 col-lg-4";
        div.innerHTML = `
                    <div class="card destination-card h-100">
                <img src="${destination.image}" class="card-img-top lazyload" alt="${destination.name}" loading="lazy">
                <div class="card-body">
                    <span class="badge bg-danger mb-2">${capitalize(destination.continent)}</span>
                    <h5 class="card-title">${destination.name}</h5>
                    <p class="card-text">${destination.description}</p>
                    <ul class="list-unstyled mb-3">
                        <li><i class="bi bi-clock"></i> ${destination.days}</li>
                        <li><i class="bi bi-star-fill text-warning"></i> ${destination.rating}</li>
                    </ul>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price text-green">From ${destination.priceValue}</span>
                        <a href="#" class="btn btn-outline-danger">View Details</a>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(div);
    });

    destinationsContainer.appendChild(fragment);
}

// Chargement initial
document.addEventListener("DOMContentLoaded", () => {
    displayPopularDestinations(destinationsData);
});
