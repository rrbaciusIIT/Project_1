function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.874684, lng: -87.635248},
        zoom: 11    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

