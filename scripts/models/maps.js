(function(module) {

  var hikingMap = {};

  hikingMap.styleArray = [
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

  hikingMap.mapOptions = {
    zoom: 7,
    styles: hikingMap.styleArray,
    center: new google.maps.LatLng(47, -120),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
  };

  hikingMap.map = new google.maps.Map(document.getElementById('map'), hikingMap.mapOptions);
  hikingMap.markersArray = [];

  hikingMap.createsMarkers = function(location) {
    var myLatLng = {lat: parseFloat(location.lat), lng: parseFloat(location.lng)};
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: hikingMap.map,
      title: location.name,
    });

    // marker.setIcon('/images/yellow-tree_160.png');

    hikingMap.markersArray.push(marker);

    marker.addListener('click', function(){
      Location.matchingJsonLocation = Location.all.filter(function(location) {
        return location.name === marker.title;
      });

      togglescroll();
      $('.mobilenav').fadeToggle(500);
      $('.top-menu').toggleClass('top-animate');
      $('body').toggleClass('noscroll');
      $('.mid-menu').toggleClass('mid-animate');
      $('.bottom-menu').toggleClass('bottom-animate');
      $('.icon').show();

      Weather.getHikeWeatherForecast(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng);

      overlayData.indexPage();
    });
  };

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = hikingMap.map.getCenter();
    google.maps.event.trigger(map, 'resize');
    hikingMap.map.setCenter(center);
  });

  module.hikingMap = hikingMap;

})(window);
