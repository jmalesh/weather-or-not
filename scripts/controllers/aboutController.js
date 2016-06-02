(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about-us-section').fadeIn().siblings().hide();
  };

  module.aboutController = aboutController;
})(window);
