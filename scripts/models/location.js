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
  };

  Location.fetchAll = function() {
    $.getJSON('data/hikes.json', function(data) {
      Location.loadAll(data);

      // Location.all.forEach(createsMarkers);
      for (var i = 0; i < Location.all.length; i++) {
        var m = Location.all[i];

        (function(n) {
          setTimeout(function() {
            createsMarkers(n);
          }, i * 1);
        }(m));
      }

      Location.setUpAutoComplete();
    });
  };

  Location.fetchAll();

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

  $('.hike-search').on('submit', function(event) {
    event.preventDefault();

    $('#hike-search').empty();

    var locationName = $('#tags').val();

    Location.matchingJsonLocation = Location.all.filter(function(location) {
      return location.name === locationName;
    });

    if(Location.foundMarker.length === 1) {
      // Location.foundMarker[0].setIcon('/images/yellow-tree_160.png');
    }

    Location.foundMarker = markersArray.filter(function(marker) {
      return marker.title === Location.matchingJsonLocation[0].name;
    });

    // Location.foundMarker[0].setIcon('/images/blue-tree_160.png');

    // console.log(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng);
    map.setCenter(new google.maps.LatLng(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng));
    map.setZoom(13);
    $('#tags').val('');
  });
  module.Location = Location;

})(window);
