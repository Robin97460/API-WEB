async function postsignin() {
    const email = "admin@mail.com";
    const password = "admin";
    const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error(`Erreur lors de la connexion : ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Connexion réussie:", data);
}
postsignin();

document.querySelector(".submit-btn").addEventListener("click", async () => {
    const email = document.querySelector("#email").value;
    const mdp = document.querySelector("#password").value;

    let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
        email: `${email}`,
        password: `${mdp}`,
    });

    let response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
    });

    let data = await response.json();
    localStorage.setItem("token", data.token);
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token") != null) {
        window.location.href = "main.html";
    }
});

const token = localStorage.getItem("token");

async function postcategories() {
    const categories = [
        { name: "Film" },
        { name: "Électronique" },
        { name: "Livres" },
        { name: "Vêtements" },
    ];
    for (let i = 0; i < 4; i++) {
        const response = await fetch("http://localhost:3000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: categories[i].name,
            }),
        });

        if (!response.ok) {
            throw new Error(
                `Erreur lors de la connexion : ${response.statusText}`
            );
        }

        const data = await response.json();
        console.log("Connexion réussie:", data);
    }
}
postcategories();

async function postproducts() {
    const produits = [
        { name: "Harry Potter", categoryId: 1 },
        { name: "Le Seigneur des Anneaux", categoryId: 1 },
        { name: "Inception", categoryId: 1 },
        { name: "Titanic", categoryId: 1 },
        { name: "Avatar", categoryId: 1 },
        { name: "Interstellar", categoryId: 1 },
        { name: "Matrix", categoryId: 1 },
        { name: "Gladiator", categoryId: 1 },
        { name: "Forrest Gump", categoryId: 1 },
        { name: "The Dark Knight", categoryId: 1 },
        { name: "Smartphone", categoryId: 2 },
        { name: "Ordinateur portable", categoryId: 2 },
        { name: "Casque Bluetooth", categoryId: 2 },
        { name: "Clavier mécanique", categoryId: 2 },
        { name: "Souris sans fil", categoryId: 2 },
        { name: "Écran 27 pouces", categoryId: 2 },
        { name: "Disque dur SSD", categoryId: 2 },
        { name: "Chargeur USB-C", categoryId: 2 },
        { name: "Montre connectée", categoryId: 2 },
        { name: "Caméra de sécurité", categoryId: 2 },
        { name: "1984", categoryId: 3 },
        { name: "Le Petit Prince", categoryId: 3 },
        { name: "L'Étranger", categoryId: 3 },
        { name: "La Peste", categoryId: 3 },
        { name: "Don Quichotte", categoryId: 3 },
        { name: "Les Misérables", categoryId: 3 },
        { name: "Le Comte de Monte-Cristo", categoryId: 3 },
        { name: "Le Hobbit", categoryId: 3 },
        { name: "Da Vinci Code", categoryId: 3 },
        { name: "Game of Thrones", categoryId: 3 },
        { name: "T-shirt blanc", categoryId: 4 },
        { name: "Jean slim", categoryId: 4 },
        { name: "Veste en cuir", categoryId: 4 },
        { name: "Pull en laine", categoryId: 4 },
        { name: "Robe d'été", categoryId: 4 },
        { name: "Short de sport", categoryId: 4 },
        { name: "Chaussettes noires", categoryId: 4 },
        { name: "Pantalon chino", categoryId: 4 },
        { name: "Casquette", categoryId: 4 },
        { name: "Sweat à capuche", categoryId: 4 },
        { name: "Manette de jeu", categoryId: 2 },
        { name: "E-book reader", categoryId: 2 },
        { name: "Chargeur solaire", categoryId: 2 },
        { name: "Batterie externe", categoryId: 2 },
        { name: "Casque de réalité virtuelle", categoryId: 2 },
        { name: "Maillot de bain", categoryId: 4 },
        { name: "Chemise blanche", categoryId: 4 },
        { name: "Recueil de poèmes", categoryId: 3 },
        { name: "Film documentaire", categoryId: 1 },
        { name: "Thriller psychologique", categoryId: 1 },
    ];

    for (let i = 0; i < produits.length; i++) {
        const response = await fetch("http://localhost:3000/produits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: produits[i].name,
                categoryId: produits[i].categoryId,
            }),
        });

        if (!response.ok) {
            throw new Error(
                `Erreur lors de la connexion : ${response.statusText}`
            );
        }

        const data = await response.json();
        console.log("Connexion réussie:", data);
    }
}
postproducts();
