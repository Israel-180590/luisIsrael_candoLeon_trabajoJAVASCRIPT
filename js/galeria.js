const imagenes = [
    { src: "../images/logo_2.jpeg", width: 1366, height: 768 },
    { src: "../images/fondo_1.png", width: 1419, height: 804 },
    { src: "../images/fondo_2.png", width: 1173, height: 747 }
];


const contenedor = document.getElementById("galeria");

imagenes.forEach(imgData => {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = "Proyecto MainDev";

    
    img.width = imgData.width;
    img.height = imgData.height;

    img.addEventListener("click", () => abrirLightbox(imgData.src));
    contenedor.appendChild(img);
});


function abrirLightbox(src) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const imgData = imagenes.find(i => i.src === src);

    const img = document.createElement("img");
    img.src = src;
    img.width = imgData.width;
    img.height = imgData.height;

    lightbox.appendChild(img);

    lightbox.addEventListener("click", () => {
        lightbox.remove();
    });

    document.body.appendChild(lightbox);
}
