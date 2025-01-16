import { destinationsData } from "./data.js";

const destinationsContainer = document.querySelector('#destinationsContainer');

// Helper function to capitalize the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to generate destination cards
function generateDestinations(data) {
    const fragment = document.createDocumentFragment();

    data.forEach(destination => {
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

    destinationsContainer.innerHTML = ""; // Clear the container once
    destinationsContainer.appendChild(fragment); // Append the fragment
}

// Apply filters
function applyFilters() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const priceFilter = document.getElementById('priceFilter').value.toLowerCase();

    let filteredDestinations = destinationsData;

    if (searchInput) {
        filteredDestinations = filteredDestinations.filter(destination =>
            destination.name.toLowerCase().includes(searchInput) // Search by name
        );
    }

    if (priceFilter) {
        filteredDestinations = filteredDestinations.filter(destination =>
            destination.price.toLowerCase() === priceFilter
        );
    }

    generateDestinations(filteredDestinations);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    generateDestinations(destinationsData); // Directly render destinations on load
});

// Event listeners
document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);
document.getElementById('applyFilters').addEventListener('click', applyFilters);