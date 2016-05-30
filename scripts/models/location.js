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
    $.getJSON('/data/hikes.json', function(data) {
      Location.loadAll(data);
      console.log('we have data');
    });
  };

  module.Location = Location;

})(window);

Location.fetchAll();
