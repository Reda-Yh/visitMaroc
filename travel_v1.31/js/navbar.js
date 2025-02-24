// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const navbar = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="./index.html">
                <i><img src="https://i.ibb.co/Cnx729n/Capture-d-cran-2025-01-20-225118-removebg-preview-removebg-preview.png"/></i>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./destinations.html">Destinations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./actualités.html">Actualités</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./patrimoine.html">Patrimoine</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./transport.html">Transport</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbar);
});