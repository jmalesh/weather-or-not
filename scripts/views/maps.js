(function(module) {

  var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { hue: '#00ffe6' },
        { saturation: -20 }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { lightness: 100 },
        { visibility: 'simplified' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 7,
    styles: styleArray,
    center: new google.maps.LatLng(47, -120),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  Location.all.forEach(function(location) {
    var myLatLng = {lat: parseFloat(location.lat), lng: parseFloat(location.lng)};
    console.log('we have markers');
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: location.name
    });

  });

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

})();
