// footer.js
document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5><i class="bi bi-globe-americas"></i> Wanderlust Travel</h5>
                    <p>Making your travel dreams come true since 2023.</p>
                    <div class="social-icons">
                        <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white text-decoration-none"><i class="bi bi-chevron-right"></i> About Us</a></li>
                        <li><a href="#" class="text-white text-decoration-none"><i class="bi bi-chevron-right"></i> Destinations</a></li>
                        <li><a href="#" class="text-white text-decoration-none"><i class="bi bi-chevron-right"></i> Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Newsletter</h5>
                    <p>Subscribe for travel updates and special offers.</p>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Enter your email">
                        <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="text-center pt-3 border-top">
                <p class="mb-0">&copy; 2023 Wanderlust Travel. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Insert footer HTML at the bottom of the body
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
