var selectedHike = 'jim-hill';

var getSelectedHikeObject = function(selection) {
  'use strict';
  var selectedHike = Location.all.filter(function(hike){
    return hike.id === selection;
  });
  console.log(selectedHike);
  return selectedHike;
};

var getHikeWeatherForecast = function(hike) {
  'use strict';
  var hikeLat = hike[0].lat;
  var hikeLng = hike[0].lng;

  console.log(hikeLat + ' ' + hikeLng);

  var weatherUrl = 'http://api.wunderground.com/api/4cad78aa1aa5f7ef/forecast/q/' + hikeLat + ',' + hikeLng + '.json';

  console.log(weatherUrl);

  $.ajax({
    url: weatherUrl,
    dataType: 'jsonp',
    success:function(data){
      console.log(data);
    }
  });
};

//Test
getHikeWeatherForecast(getSelectedHikeObject(selectedHike));
