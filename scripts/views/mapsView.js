(function(module) {
  var mapView = {};

  mapView.initClustering = function() {
    var options = {
      imagePath: 'images/m'
    };
    var markerCluster = new MarkerClusterer(hikingMap.map, hikingMap.markersArray, options);
  };

  mapView.populateMap = function(next) {
    Location.all.forEach(hikingMap.createsMarkers);
    next();
  };

  module.mapView = mapView;
})(window);
