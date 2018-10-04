(function() {
  "use strict";

  angular
    .module("explorer.stats")
    .controller("explorer.stats.StatsController", StatsController);

  StatsController.$inject = ["$scope", "explorer.stats.Stat"];
  function StatsController($scope, service) {
    var vm = this;
    var stat = service.getStats();
    var price = service.getPrice();

    updateStats();

    var filter = web3.eth.filter("latest");
    filter.watch(function(error, result) {
      if(!error) {
        console.log(result);
        updateStats();
        $scope.$apply();
      }
    });

    function updateStats() {
      $scope.blockNumber = web3.eth.blockNumber;
      if($scope.blockNumber == undefined) console.log("no block number");
      else {
        var latest = web3.eth.getBlock($scope.blockNumber);
        $scope.gasLimit = new BigNumber(latest.gasLimit).toFormat(3);
        stat.then(function (response) {
          $scope.blockTime = new BigNumber(response.data.blocktime).toFormat(3);
          $scope.difficulty = new BigNumber(response.data.difficulty).div(1000000000000).toFormat(3);
          $scope.hashrate = new BigNumber(response.data.hashrate).div(1000000000000).toFormat(3);
        }).catch(function (error) {
          console.log("Something's wrong.");
        });

        price.then(function (response) {
          $scope.ethPrice = new BigNumber(response.data[0].price_usd).toFormat(3);
        }).catch(function (error) {
          console.log("Something's wrong.");
        });
      }
    }
  }
})();