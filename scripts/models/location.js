(function (module) {
  function Location (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

Location.all = [];

  Location.loadAll = function(dataWePass) {
    dataWePass.forEach(function(ele) {
      Location.all.push(new Location(ele));
    });
  };

  Location.fetchAll = function() {
    $.getJSON('data/hikes.json', function(data) {
      Location.loadAll(data);
      Location.all.forEach(createsMarkers);
      Location.setUpAutoComplete();
    });
  };

  Location.fetchAll();

  Location.setUpAutoComplete = function() {
    var availableTags = Location.all.map(function(location) {
      return location.name;
    });
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  };

  $('.hike-search').on('submit', function(event) {
    event.preventDefault();
    var locationName = $('#tags').val();
    var matchingJsonLocation = Location.all.filter(function(location) {
      return location.name === locationName;
    });
    console.log(matchingJsonLocation[0].lat, matchingJsonLocation[0].lng);
    map.setCenter(new google.maps.LatLng(matchingJsonLocation[0].lat, matchingJsonLocation[0].lng));
    map.setZoom(13);
  });

  module.Location = Location;

})(window);
