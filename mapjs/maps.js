function initMaps(id,adrs) {
let map = new google.maps.Map(document.getElementById(id), {
 zoom: 8,
 center: {lat: -34.397, lng: 150.644}
});

let geocoder = new google.maps.Geocoder();
geocodeAddress(geocoder, map, adrs);
}

function geocodeAddress(geocoder, resultsMap, adrs) {
const address = adrs;
geocoder.geocode({'address': address}, function(results, status) {
 if (status === 'OK') {
   resultsMap.setCenter(results[0].geometry.location);
   let marker = new google.maps.Marker({
     map: resultsMap,
     position: results[0].geometry.location
   });
 } else {
   alert('Geocode was not successful for the following reason: ' + status);
 }
});
}

initMaps();
