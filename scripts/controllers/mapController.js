(function(module) {
  var mapController = {};

  mapController.index = function() {
    if (Location.all.length === 0) {
      Location.fetchAll();
    }
    $('#map-section').fadeIn(function(){
      google.maps.event.trigger(map, 'resize');
      var center = new google.maps.LatLng(47, -120);
      hikingMap.map.setCenter(center);
      hikingMap.map.setZoom(7);
    }).siblings().hide();
  };

  module.mapController = mapController;
})(window);
