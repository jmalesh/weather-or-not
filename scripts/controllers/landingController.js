(function(module) {
  var landingController = {};

  landingController.index = function() {
    // $('#map-section').hide();
    $('#landing-info').fadeIn().siblings().hide();
  };

  module.landingController = landingController;
})(window);
