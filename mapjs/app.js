$(document).ready(function() {

	$('select').material_select();
	$('#selectRestaurant').on('change', function() {
		$('#photoRestaurant').empty();
		const type = $('#selectRestaurant').val();
		const restaurant = data[type];
		let adder = 0;
		//Recorriendo items del data[type] 
		$.each(restaurant, function(i, v) {
			adder ++;
			//anado a mi div vacio toda la info que necesito de los restaurantes usando clases de materialize//
			$('#photoRestaurant').append(
				"<div class='col s6'>" +
					"<div class='card hoverable'>" +
						"<div class='card-image'>" +
						"<a class='waves-effect waves-light modal-trigger' href='#modal" + adder + "'>" +
						"<img src='" + v.photo + "' alt='...'>" +
						"<span class='card-title'>" + v.name +
						"</span>" +
						"</a>" +
						"</div>" +
					"</div>" +
				"</div>" +
				//Modal 
				"<div id='modal" + adder + "' class='modal'>"+
					"<div class='modal-restaurant'>"+
						"<a href='#!' class='right modal-action modal-close waves-effect waves-green btn-flat'><i class='fa fa-times' aria-hidden='true'></i></a>" +
						"<h4 class='center-align'>" + v.name + "</h4>" +
                        "<div id='" + adder + "' class= 'video-container'>" +
                        "</div>" +
						"<p><strong>Adress: </strong>" + v.adress + "</p>" +
						"<p><strong>Price: </strong> <span class='deep-orange-text text-darken-1'>" +
						v.range + "</span></p>" +
					"</div>" +
				"</div>"
			);

            initMaps(adder,v.adress);
			//Codigo materialize de los modales
			$('.modal').modal({
			  dismissible: true, 
			  opacity: .5,
			  inDuration: 300, 
			  outDuration: 200, 
			  startingTop: '4%', 
			  endingTop: '10%', 
			});
   	 	});
	});
 });


var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
});

infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) { //HTML5 Geolocalización
        navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
     // Navegador no soporta Geolocalización
     handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
