let currentPage = 1;
let searchTerm = "";
let totalProducts = 0;
const itemsPerPage = 5;

document.getElementById("search-btn").addEventListener("click", function () {
    loadProducts(1);
});

document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentPage > 1) {
        loadProducts(currentPage - 1);
    }
});

document.getElementById("next-btn").addEventListener("click", function () {
    if (currentPage * itemsPerPage < totalProducts) {
        loadProducts(currentPage + 1);
    }
});

async function loadProducts(page) {
    currentPage = page;
    searchTerm = document.getElementById("search").value.trim();

    try {
        const response = await fetch(
            `http://localhost:3000/produits/page/${page}/${encodeURIComponent(
                searchTerm
            )}`
        );
        const data = await response.json();

        totalProducts = data.total || 0;
        displayProducts(data.produits);
        updateNavigation(data.page);
    } catch (err) {
        console.error("Erreur:", err);
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    if (!products || products.length === 0) {
        container.innerHTML = "<p>Aucun produit trouvé.</p>";
        return;
    }

    products.forEach((product) => {
        const div = document.createElement("div");
        div.className = "product";
        div.textContent = product.name;
        container.appendChild(div);
    });
}

function updateNavigation(page) {
    document.getElementById("current-page").textContent = `Page ${page}`;

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    prevBtn.disabled = page <= 1;
    nextBtn.disabled = page * itemsPerPage >= totalProducts;
}

loadProducts(1);
