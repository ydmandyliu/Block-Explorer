(function() {
  "use strict";
  // var BigNumber = require('bignumber.js');

  angular
    .module("explorer.transactions")
    .factory("explorer.transactions.Transaction", TransactionFactory);

  TransactionFactory.$inject = ["$resource", 
                          "explorer.config.APP_CONFIG", 
                          "$rootScope",
                          "$scope",
                          "$location",
                          "$routeParams",
                          "$q"];
  function TransactionFactory($resource, APP_CONFIG, $rootScope, $scope, $location, $routeParams, $q) {
    // var service = this;
    // service.getRecenttransactions = getRecenttransactions;

    // function getRecenttransactions() {
    //   var deferred = $q.defer();

    //   web3.eth.gettransaction("latest") {
        
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

  //nests the default payload below a "transaction" element 
  //as required by default by Rails API resources
  // function buildNestedBody(data) {
  //  return angular.toJson({transaction: data})
  // }  
})();
