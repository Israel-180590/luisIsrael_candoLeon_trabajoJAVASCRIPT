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

    // DESCUENTO SEGÚN PLAZO (tramos)
    let meses = Number(plazo.value);
    let descuento = 0;

    if (meses >= 7 && meses <= 12) descuento = 0.05;
    if (meses >= 13 && meses <= 18) descuento = 0.10;
    if (meses >= 19 && meses <= 24) descuento = 0.15;

    let precioConDescuento = precioFinal * (1 - descuento);

    total.value = precioConDescuento.toFixed(2) + " €";
}


producto.addEventListener("change", calcularPresupuesto);
plazo.addEventListener("input", calcularPresupuesto);
extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));


calcularPresupuesto();

