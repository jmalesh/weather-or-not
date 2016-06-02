(function (module) {
  function Location (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Location.all = [];
  Location.matchingJsonLocation = [];
  Location.foundMarker = [];

  Location.loadAll = function(dataWePass) {
    dataWePass.forEach(function(ele) {
      Location.all.push(new Location(ele));
    });
    mapView.populateMap(mapView.initClustering);
  };

  Location.fetchAll = function() {
    $.getJSON('data/hikes.json', function(data) {
      Location.loadAll(data);
      Location.setUpAutoComplete();
    });
  };

  Location.setUpAutoComplete = function() {
    var availableTags = Location.all.map(function(location) {
      return location.name;
    });
    $('#tags').autocomplete({
      source: availableTags
    });
  };

  Location.prototype.toHtml = function() {
    var $hikeTemplateScript = $('#hike-template').html();
    var hikeTemplate = Handlebars.compile($hikeTemplateScript);
    var compiledTemplate = hikeTemplate(this);
    return compiledTemplate;
  };

  module.Location = Location;

})(window);
