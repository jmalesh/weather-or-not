(function (module) {

  function Weather (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Weather.all = [];

  Weather.prototype.toHtml = function() {
    var $weatherTemplateScript = $('#weather-template').html();
    var weatherTemplate = Handlebars.compile($weatherTemplateScript);
    var compiledWeatherTemplate = weatherTemplate(this);
    return compiledWeatherTemplate;
  };

  Weather.getHikeWeatherForecast = function(hikeLat, hikeLng) {
    'use strict';

    var weatherUrl = 'https://api.wunderground.com/api/4cad78aa1aa5f7ef/forecast/q/' + hikeLat + ',' + hikeLng + '.json';

    $.ajax({
      url: weatherUrl,
      dataType: 'jsonp',
      success:function(data){
        var resultsData = data.forecast.txt_forecast.forecastday;
        Weather.all = [];
        resultsData.forEach(function(object) {
          Weather.all.push(new Weather(object));
        });
        overlayData.weatherAppendIndexPage();
      }
    });
  };

  module.Weather = Weather;
})(window);
