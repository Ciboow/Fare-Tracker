
// map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';
var reqcount = 0;
var lat, long;
navigator.geolocation.watchPosition(successCallback, errorCallback, options);



function successCallback(position) {
const { accuracy, latitude, longitude, altitude, heading, speed} = position.coords;
    // Show a map centered at latitude / longitude.
    //details.innerHTML += "Latitude: "+latitude+" | Longitude: "+longitude+"<br>";
    lat = latitude;
    long = longitude;
}
function errorCallback(error) {

}
var options = {
//enableHighAccuracy: false,
//timeout: 5000,
//maximumAge: 0
};