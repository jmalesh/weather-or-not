var getHikeWeatherForecast = function(hikeLat, hikeLng) {
  'use strict';

  var weatherUrl = 'http://api.wunderground.com/api/4cad78aa1aa5f7ef/forecast/q/' + hikeLat + ',' + hikeLng + '.json';

  // console.log(weatherUrl);

  $.ajax({
    url: weatherUrl,
    dataType: 'jsonp',
    success:function(data){
      // console.log(data);
    }
  });
};
