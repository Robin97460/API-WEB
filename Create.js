const token = localStorage.getItem("token");

async function postproduct() {
    let name = document.getElementById("nom").value;

    let categoryId = document.getElementById("categorie").value;
    const response = await fetch("http://localhost:3000/produits", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name,
            categoryId: Number.parseInt(categoryId),
        }),
    });

    const data = await response.json();
    console.log("Connexion réussie:", data);

    document.getElementById("success").innerHTML = "SUCCESS";

    document.getElementById("categorie").value = "";
    document.getElementById("nom").value = "";
}

document.getElementById("submit").addEventListener("click", postproduct);
