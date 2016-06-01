(function (module) {

  function Weather (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Weather.all = [];

  Weather.prototype.toAddHtml = function() {
    var $weatherTemplateScript = $('#weather-template').html();
    var weatherTemplate = Handlebars.compile($weatherTemplateScript);
    var compiledWeatherTemplate = weatherTemplate(this);
    return compiledWeatherTemplate;
  };

  var getHikeWeatherForecast = function(hikeLat, hikeLng) {
    'use strict';

    var weatherUrl = 'http://api.wunderground.com/api/4cad78aa1aa5f7ef/forecast/q/' + hikeLat + ',' + hikeLng + '.json';

    $.ajax({
      url: weatherUrl,
      dataType: 'jsonp',
      success:function(data){
        var resultsData = data.forecast.txt_forecast.forecastday;
        Weather.all = [];
        resultsData.forEach(function(object) {
          Weather.all.push(new Weather(object));
        });
        weatherAppendIndexPage();
      }
    });

    var weatherAppendIndexPage = function() {
      Weather.all.forEach(function(a) {
        $('.overlay-data').append(a.toAddHtml());
      });
    };

  };

  module.Weather = Weather;
  module.getHikeWeatherForecast = getHikeWeatherForecast;
})(window);
