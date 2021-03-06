var changeIcon = function(locationName) {

  Location.matchingJsonLocation = Location.all.filter(function(location) {
    return location.name === locationName;
  });

  if(Location.foundMarker.length === 1) {
    Location.foundMarker[0].setIcon('http://maps.gstatic.com/mapfiles/markers2/marker.png');
  }

  Location.foundMarker = hikingMap.markersArray.filter(function(marker) {
    return marker.title === Location.matchingJsonLocation[0].name;
  });

  Location.foundMarker[0].setIcon('http://maps.gstatic.com/mapfiles/markers2/arrow.png');
  $('#map-section').fadeIn(function(){
    google.maps.event.trigger(map, 'resize');
    var center = new google.maps.LatLng(Location.matchingJsonLocation[0].lat, Location.matchingJsonLocation[0].lng);
    hikingMap.map.setCenter(center);
    hikingMap.map.setZoom(13);
  }).siblings().hide();

};


$('.hike-search').on('submit', function(event) {
  event.preventDefault();
  $('#hike-search').empty();

  changeIcon($('#tags').val());

  $('#tags').val('');
});
