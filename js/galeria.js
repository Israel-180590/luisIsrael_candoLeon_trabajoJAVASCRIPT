
const imagenes = [
    "../images/logo_2.jpeg",
    "../images/fondo_1.png",
    "../images/fondo_2.png"
];

const contenedor = document.getElementById("galeria");


imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Proyecto MainDev";
    img.addEventListener("click", () => abrirLightbox(src));
    contenedor.appendChild(img);
});


function abrirLightbox(src) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const img = document.createElement("img");
    img.src = src;

    lightbox.appendChild(img);

    lightbox.addEventListener("click", () => {
        lightbox.remove();
    });

    document.body.appendChild(lightbox);
}
