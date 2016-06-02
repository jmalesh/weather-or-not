$('.hike-search').on('submit', function(event) {
  event.preventDefault();
  $('#hike-search').empty();
  var locationName = $('#tags').val();

  Location.matchingJsonLocation = [];

  Location.matchingJsonLocation = Location.all.filter(function(location) {
    return location.name === locationName;
  });

  if(Location.foundMarker.length === 1) {
    // Location.foundMarker[0].setIcon('/images/yellow-tree_160.png');
  }

  Location.foundMarker = hikingMap.markersArray.filter(function(marker) {
    return marker.title === Location.matchingJsonLocation[0].name;
  });

  // Location.foundMarker[0].setIcon('/images/blue-tree_160.png');
  $('#map-section').fadeIn(function(){
    google.maps.event.trigger(map, 'resize');
    var center = new google.maps.LatLng(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng);
    hikingMap.map.setCenter(center);
    hikingMap.map.setZoom(13);
  }).siblings().hide();

  $('#tags').val('');
});
