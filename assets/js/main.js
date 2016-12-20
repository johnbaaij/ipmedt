/**
 * Created by John on 07/12/2016.
 */


$(document).ready(function() {
    var dronePositon = 0;
    var position = "0 0 -15";
    navigator.geolocation.getCurrentPosition(function(location) {
        var latitude =(location.coords.latitude);
        var longitude= (location.coords.longitude);
        var image = map(latitude,longitude);
        $('#ground').attr('src', image);
    });
    z = 0;

    var pos = document.querySelector('#camera').getAttribute('rotation');

    $('#drone').attr('position', dronePositon + ' 0 -15');

    var boxLeft = document.getElementById('boxLeft');
    var boxRight = document.getElementById('boxRight');

    var scene = document.getElementById('scene');

    $('#drone').attr('position', dronePositon + ' 0 -15');

    //getPositon

    var cameraEl = document.querySelector('#camera');

    var droneEl = document.querySelector('#drone');
    var worldPos = new THREE.Vector3();

    cameraEl.addEventListener('componentchanged', function (evt) {
        if (evt.detail.name !== 'rotation') {
            return;
        }
        var rotation = document.querySelector('#camera').getAttribute('rotation')
        var y = rotation.y;
        if (y < 0) {
            y = Math.abs(y);
        }
        else {
            y = -Math.abs(y);
        }
        var pos = worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
        $('#drone').attr('position', y + ' 0 -15');
    });

});

function map(latitude, longitude){
    // https://api.mapbox.com/v4/digitalglobe.nal0g75k/4.8951680, 52.3702160, 16/1280x1280.png?access_token=pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6ImNpd3hobzFjMDAxYmYyb3M1dHdycHdsdXEifQ.44j4Bphp5yP_E9r-YQTqHA

    var url = "https://api.mapbox.com/v4/digitalglobe.nal0g75k/" + longitude + "," + latitude + ", 16/1280x1280.png?access_token=pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6ImNpd3hobzFjMDAxYmYyb3M1dHdycHdsdXEifQ.44j4Bphp5yP_E9r-YQTqHA";

    return url;
}








