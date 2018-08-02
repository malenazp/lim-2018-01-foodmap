const findme = document.getElementById('findme');

function findMe(){
    //Verificando el soporte de geolocalización
    const output = document.getElementById('map');
    if(navigator.geolocation) {
        output.innerHTML = "<p>Su navegador soporta Geolocalización</p>";
    } 
    //Obteniendo latitud y longitud
    function localizacion(posicion){
        let latitude = posicion.coords.latitude;
        let longitude = posicion.coords.longitude;

        /* output.innerHTML = "<p>Latitud "+latitude+" <br>Longitud : "+longitude+" </p>";
 */
        let imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"
        &size=600x300&markers=color:red%7C"+latitude+","+longitude+"
        &key=AIzaSyDenel9gg0uVO06PlLnu22udhoJDmySk44";

        output.innerHTML = "<img src='"+imgURL+"'>";
    }

    function error () {
        output.innerHTML = "<p>No se pudo obtener su ubicación</p>";
    }
    navigator.geolocation.getCurrentPosition(localizacion,error);
}

findme.addEventListener("click", () => findMe());

/* else {
    output.innerHTML = "<p>Su navegador no soporta Geolocalización</p>";
} */