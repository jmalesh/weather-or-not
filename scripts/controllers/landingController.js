(function(module) {
  var landingController = {};

  if (Location.all.length === 0) {
    Location.fetchAll();
  } else {
    mapView.populateMap(mapView.initClustering);
  }

  landingController.index = function() {
    $('#landing-info').fadeIn().siblings().hide();
  };

  module.landingController = landingController;
})(window);
