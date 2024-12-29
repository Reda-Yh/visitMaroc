// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const navbar = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="bi bi-globe-americas"></i> Wanderlust
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
                        <a class="nav-link fw-semibold" href="./offers.html">Special Offers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="./blog.html">Blog</a>
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
