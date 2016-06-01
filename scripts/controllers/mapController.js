(function(module) {
  var mapController = {};

  mapController.index = function() {
    $('#landing-info').hide();
    $('#about-us-section').hide();
    $('#map-section').fadeIn();
  };

  module.mapController = mapController;
})(window);
