

document.addEventListener("DOMContentLoaded", () => {
    const contenedorNoticias = document.getElementById("contenedor-noticias");

    if (contenedorNoticias) {
        fetch("data/noticias.json")
            .then(response => response.json())
            .then(noticias => mostrarNoticias(noticias))
            .catch(error => console.error("Error al cargar las noticias:", error));
    }
});

function mostrarNoticias(noticias) {
    const contenedor = document.getElementById("contenedor-noticias");
    if (!contenedor) return;

    noticias.forEach(noticia => {
        const card = document.createElement("article");
        card.classList.add("noticia");

        card.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
            <span class="fecha">${noticia.fecha}</span>
        `;

        contenedor.appendChild(card);
    });
}



setTimeout(() => {
    const logo = document.querySelector(".logo_2");
    const noticias = document.getElementById("noticias");

    if (logo && noticias) {
        logo.style.opacity = "0";

        setTimeout(() => {
            logo.style.display = "none";
            noticias.style.display = "block";

            setTimeout(() => {
                noticias.style.opacity = "1";
            }, 50);

        }, 800);
    }
}, 3000);





