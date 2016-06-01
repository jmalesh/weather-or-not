(function(module) {

  var markersArray = [];

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
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: location.name,
    });

    // marker.setIcon('/images/yellow-tree_160.png');

    markersArray.push(marker);

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


      getHikeWeatherForecast(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng);

      var indexPage = function() {
        $('.overlay-data').empty();
        Location.matchingJsonLocation.forEach(function(a) {
          $('.overlay-data').append(a.toHtml());
        });
      };
      indexPage();
    });
  };

  var initClustering = function() {
    var options = {
      imagePath: 'images/m'
    };
    var markerCluster = new MarkerClusterer(map, markersArray, options);
  };

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  module.initClustering = initClustering;
  module.markersArray = markersArray;
  module.map = map;
  module.createsMarkers = createsMarkers;
  module.mapOptions = mapOptions;

})(window);
