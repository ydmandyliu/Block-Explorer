(function() {
  "use strict";

  angular
    .module("explorer.stats")
    .controller("explorer.stats.StatsController", StatsController);

  StatsController.$inject = ["$scope", "explorer.stats.Stat"];
  function StatsController($scope, service) {
    var vm = this;
    var promise = service.getStats();

    updateStats();

    function updateStats() {
      $scope.blockNumber = web3.eth.blockNumber;
      if($scope.blockNumber == undefined) console.log("no blockNumber");
      else {
        var latest = web3.eth.getBlock($scope.blockNumber);
        // var last = web3.eth.getBlock($scope.blockNumber - 1);
        // $scope.gasLimit = latest.gasLimit;
        // $scope.blockTime = latest.timestamp - last.timestamp;
        // $scope.difficulty = new BigNumber(latest.difficulty).shiftedBy(-12).toFixed(1);
        promise.then(function (response) {
          $scope.hashrate = response.data.hashrate;
        }).catch(function (error) {
          console.log("Something wrong.");
        });
      }
    }
  }
})();