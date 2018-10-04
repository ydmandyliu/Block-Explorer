(function() {
  "use strict";

  angular
    .module("explorer.transactions")
    .controller("explorer.transactions.TransactionsController", TransactionsController);

  TransactionsController.$inject = ["$scope"];
  function TransactionsController($scope) {
    var vm = this;
    vm.txns = []; // transaction hashes
    vm.getHash = getHash;
    vm.getTime = getTime;
    vm.getAddress = getAddress;
    vm.getAmount = getAmount;

    updateTransactions();

    var filter = web3.eth.filter("latest");
    filter.watch(function(error, result) {
    	if(!error) {
    		console.log(result);
    		updateTransactions();
    		$scope.$apply();
    	}
    });

    function updateTransactions() {
		var current = web3.eth.blockNumber;
      	for(var i = 0; i < 10 && current - i >= 0; i++) {
      		var tx = web3.eth.getBlock(current).transactions;
      		vm.txns.push(tx[tx.length - 1]);
      	}
    }

    function getHash(hash) {
    	return hash == undefined ? "undefined" : hash.substring(0, 20) + "...";
    }

    function getTime(hash) {
    	if(hash == undefined) return 0;
    	var blocknum = web3.eth.getTransaction(hash).blockNumber;
    	var block = web3.eth.getBlock(blocknum);
    	var date = new Date();
      	return Math.floor(date.getTime() / 1000) - block.timestamp;
    }

    function getAddress(address) {
    	return address == undefined ? "undefined" : address.substring(0, 20) + "...";
    }

    function getAmount(value) {
    	return value == undefined ? 0 : new BigNumber(value).div(1000000000000000000).toFormat(3);
    }
  }
})();