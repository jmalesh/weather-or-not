(function(module) {
  var landingController = {};

  landingController.index = function() {
    if (Location.all.length === 0) {
      Location.fetchAll();
    } else {
      mapView.populateMap(mapView.initClustering);
    }
    $('#landing-info').fadeIn().siblings().hide();
  };

  module.landingController = landingController;
})(window);
