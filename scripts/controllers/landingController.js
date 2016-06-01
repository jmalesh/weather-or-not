(function(module) {
  var landingController = {};

  landingController.index = function() {
    $('#map-section').hide();
    $('#about-us-section').hide();
    $('#landing-info').fadeIn();
  };

  module.landingController = landingController;
})(window);
