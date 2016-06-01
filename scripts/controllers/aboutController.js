(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#landing-info').hide();
    $('#map-section').hide();
    $('#about-us-section').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
