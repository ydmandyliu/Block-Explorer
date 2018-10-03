(function() {
  "use strict";
  // var BigNumber = require('bignumber.js');

  angular
    .module("explorer.stats")
    .service("explorer.stats.Stat", Stat);

  Stat.$inject = ["$http"];
  function Stat($http) {
    var service = this;
    service.getStats = function () {
      var response = $http({
        method: "GET",
        url: "https://www.etherchain.org/api/miningEstimator"
      });

      return response;
    }
  }

  //nests the default payload below a "stat" element 
  //as required by default by Rails API resources
  // function buildNestedBody(data) {
  //  return angular.toJson({stat: data})
  // }  
})();
