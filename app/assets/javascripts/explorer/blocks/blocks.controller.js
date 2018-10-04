(function() {
  "use strict";

  angular
    .module("explorer.blocks")
    .controller("explorer.blocks.BlocksController", BlocksController);
  
  BlocksController.$inject = ["$scope"];
  function BlocksController($scope) {
      var vm = this;
      vm.blocks = [];
      vm.getTime = getTime;
      vm.getDifficulty = getDifficulty;
      vm.getHash = getHash;
      vm.getMiner = getMiner;

      updateBlocks();

      console.log(web3.eth.blockNumber);

      var filter = web3.eth.filter("latest");
  	  filter.watch(function(error, result) {
  	  	if(!error) {
  	  		console.log(result);
  	    	updateBlocks();
  	    	$scope.$apply();
  	    }
  	  });

      function updateBlocks() {
      	var current = web3.eth.blockNumber;
      	for(var i = 0; i < 10 && current - i >= 0; i++) {
      		vm.blocks.push(web3.eth.getBlock(current - i));
      	}
      }

      function getTime(timestamp) {
      	var date = new Date();
      	return Math.floor(date.getTime() / 1000) - timestamp;
      }

      function getDifficulty(diff) {
      	return new BigNumber(diff).div(1000000000000).toFormat(3);
      }

      function getHash(hash) {
      	return hash.substring(0, 20) + "...";
      }

      function getMiner(miner) {
      	return miner.substring(0, 30) + "...";
      }
  }
})();