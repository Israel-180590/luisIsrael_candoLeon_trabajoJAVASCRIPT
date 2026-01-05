
let options = {
    enableHighaccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options

    );
} else {
    alert('Los sercivios de geolocalización no están disponibles');
}

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 16
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'MiopenStreetMap' }).addTo(map)

    let marker = L.marker([39.214127, -0.526507])
    .bindTooltip('MAINDEV Developer.<br>Expertos en desarrollo web')
    .bindPopup('<b>MAINDEV Developer</b><br> Carrer 9 d Octubre <br> Tel: 693 693 693')
    .addTo(map)
    .openPopup();


    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(39.214127, -0.526507)
        ],



        language: 'es'
    }).addTo(map);

}

function error() {


}





