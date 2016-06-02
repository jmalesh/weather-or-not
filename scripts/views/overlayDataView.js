(function(module) {
  var overlayData = {};

  overlayData.indexPage = function() {
    $('.overlay-data').empty();
    Location.matchingJsonLocation.forEach(function(a) {
      $('.overlay-data').append(a.toHtml());
    });
  };

  overlayData.weatherAppendIndexPage = function() {
    Weather.all.forEach(function(a) {
      $('.overlay-data').append(a.toHtml());
    });
  };

  module.overlayData = overlayData;
})(window);
