var BigNumber = require('bignumber.js');
var Web3 = require('web3');

var GETH_HOSTNAME	= "localhost";
var GETH_RPCPORT  	= 8545; 		

var web3 = new Web3();
	web3.setProvider(new web3.providers.HttpProvider("http://" + GETH_HOSTNAME + ":" + GETH_RPCPORT));