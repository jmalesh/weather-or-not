(function(module) {
  var landingController = {};

  landingController.index = function() {
    $('#map-section').hide();
    $('#landing-info').fadeIn();
  };

  module.landingController = landingController;
})(window);
