(function() {
  "use strict";
  // var BigNumber = require('bignumber.js');

  angular
    .module("explorer.blocks")
    .factory("explorer.blocks.Block", BlockFactory);

  BlockFactory.$inject = ["$resource", 
                          "explorer.config.APP_CONFIG", 
                          "$rootScope",
                          //"$scope",
                          "$location",
                          //"$routeParams",
                          "$q"];
  function BlockFactory($resource, APP_CONFIG, $rootScope, $location, $q) {
    // var service = this;
    // service.getRecentBlocks = getRecentBlocks;

    // function getRecentBlocks() {
    //   var deferred = $q.defer();

    //   web3.eth.getBlock("latest") {
        
    //   }
    // }

    // $scope.init = function() {

    // }

    // $scope.init();
    // return $resource(APP_CONFIG.server_url + "/api/foos/:id",
    //   { id: '@id'},
    //   { 
    //     update: { method: "PUT",
    //               transformRequest: buildNestedBody },
    //     save: { method: "POST",
    //               transformRequest: buildNestedBody }
    //   });
  }

  //nests the default payload below a "block" element 
  //as required by default by Rails API resources
  // function buildNestedBody(data) {
  //  return angular.toJson({block: data})
  // }  
})();
