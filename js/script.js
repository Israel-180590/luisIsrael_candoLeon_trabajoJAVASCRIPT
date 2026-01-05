

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



const form = document.getElementById("formPresupuesto");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const condiciones = document.getElementById("condiciones").checked;

        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
        const soloNumeros = /^[0-9]+$/;
        const emailValido = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if (!soloLetras.test(nombre)) return alert("El nombre solo puede contener letras");
        if (!soloLetras.test(apellidos)) return alert("Los apellidos solo pueden contener letras");
        if (!soloNumeros.test(telefono) || telefono.length !== 9) return alert("El teléfono debe tener 9 números");
        if (!emailValido.test(email)) return alert("El email no es válido");
        if (!condiciones) return alert("Debes aceptar las condiciones");

        alert("Formulario enviado correctamente");
    });
}



const producto = document.getElementById("producto");
const plazo = document.getElementById("plazo");
const extras = document.querySelectorAll(".extra");
const total = document.getElementById("total");


function calcularPresupuesto() {
    let precioBase = Number(producto.value) || 0;
    let precioExtras = 0;

    extras.forEach(extra => {
        if (extra.checked) precioExtras += Number(extra.value);
    });

    let precioFinal = precioBase + precioExtras;

    total.value = precioFinal + " €";
}


producto.addEventListener("change", calcularPresupuesto);
plazo.addEventListener("input", calcularPresupuesto);
extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));



