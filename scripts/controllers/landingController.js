(function(module) {
  var landingController = {};

  landingController.index = function() {
    $('#landing-info').fadeIn().siblings().hide();
  };

  module.landingController = landingController;
})(window);
