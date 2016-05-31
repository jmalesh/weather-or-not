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

  var createsMarkers = function(location) {
    var myLatLng = {lat: parseFloat(location.lat), lng: parseFloat(location.lng)};
    console.log('we have markers');
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: location.name
    });

    marker.addListener('click', function(){
      Location.matchingJsonLocation = Location.all.filter(function(location) {
        return location.name === marker.title;
      });

      getHikeWeatherForecast(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng);
      console.log(marker.title);

      var indexPage = function() {
        console.log(Location.matchingJsonLocation);
        $('#hike-search').empty();
        Location.matchingJsonLocation.forEach(function(a) {
          $('#hike-search').append(a.toHtml());
        });
      };

      indexPage();
    });
  };

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  module.map = map;
  module.createsMarkers = createsMarkers;
  module.mapOptions = mapOptions;

})(window);
