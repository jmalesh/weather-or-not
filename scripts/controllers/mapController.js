(function(module) {
  var mapController = {};

  mapController.index = function() {
    $('#landing-info').hide();
    $('#map-section').fadeIn();
  };

  module.mapController = mapController;
})(window);
