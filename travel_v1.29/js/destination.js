import { destinationsData } from "./data.js";

const destinationsContainer = document.querySelector('.row.g-4');

// Function to generate destination cards
function generateDestinations(data) {
    destinationsContainer.innerHTML = ""; // Clear the container

    data.forEach(destination => {
        const div = document.createElement('div');
        div.className = "col-md-6 col-lg-4";

        div.innerHTML = `
            <div class="card destination-card h-100">
                <img src="${destination.image}" class="card-img-top" alt="${destination.name}">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${capitalize(destination.continent)}</span>
                    <h5 class="card-title">${destination.name}</h5>
                    <p class="card-text">${destination.description}</p>
                    <ul class="list-unstyled mb-3">
                        <li><i class="bi bi-clock"></i> ${destination.days}</li>
                        <li><i class="bi bi-star-fill text-warning"></i> ${destination.rating}</li>
                    </ul>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price">From ${destination.priceValue}</span>
                        <a href="#" class="btn btn-outline-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;

        destinationsContainer.appendChild(div);
    });
}


// Helper function to capitalize the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Apply filters
function applyFilters() {
    const continentFilter = document.getElementById('continentFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    let filteredDestinations = destinationsData;

    if (continentFilter) {
        filteredDestinations = filteredDestinations.filter(destination => destination.continent === continentFilter);
    }

    if (priceFilter) {
        filteredDestinations = filteredDestinations.filter(destination => destination.price === priceFilter);
    }

    generateDestinations(filteredDestinations);
}

// Event listener for the filter button
document.getElementById('applyFilters').addEventListener('click', applyFilters);

// Initial load
generateDestinations(destinationsData);