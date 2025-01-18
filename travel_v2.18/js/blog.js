document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".card-body form");
    const searchInput = searchForm.querySelector("input[type='search']");
    const articles = document.querySelectorAll("article.card");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        const query = searchInput.value.trim().toLowerCase();

        articles.forEach((article) => {
            const title = article.querySelector(".card-title")?.textContent.toLowerCase();
            const content = article.querySelector(".card-text")?.textContent.toLowerCase();

            if (title.includes(query) || content.includes(query)) {
                article.style.display = "block"; // Affiche l'article correspondant
            } else {
                article.style.display = "none"; // Masque les articles non correspondants
            }
        });
    });
});
