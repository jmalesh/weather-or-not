(function(module) {
  var mapController = {};

  mapController.index = function() {
    $('#map-section').fadeIn(function(){
      google.maps.event.trigger(map, 'resize');
      var center = new google.maps.LatLng(47, -120);
      map.setCenter(center);
      map.setZoom(7);
    }).siblings().hide();
  };

  module.mapController = mapController;
})(window);
