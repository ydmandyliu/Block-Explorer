(function() {
  "use strict";

  angular
    .module("explorer.transactions")
    .controller("explorer.transactions.TransactionsController", TransactionsController);

  TransactionsController.$inject = ["explorer.transactions.Transaction"];

  function TransactionsController(transaction) {
      var vm = this;
      vm.transactions;
      vm.transaction;
      vm.edit   = edit;
      vm.create = create;
      vm.update = update;
      vm.remove = remove;      

      activate();
      return;
      ////////////////
      function activate() {
        newtransaction();
        vm.transactions = Transaction.query();
      }

      function newTransaction() {
        vm.transaction = new Transaction();
      }
      function handleError(response) {
        console.log(response);
      } 
      function edit(object) {
        console.log("selected", object);
        vm.transaction = object;        
      }

      function create() {
        //console.log("creating transaction", vm.transaction);
        vm.transaction.$save()
          .then(function(response){
            //console.log(response);
            vm.transactions.push(vm.transaction);
            newTransaction();
          })
          .catch(handleError);        
      }

      function update() {
        //console.log("update", vm.transaction);
        vm.transaction.$update()
          .then(function(response){
            //console.log(response);
        })
        .catch(handleError);        
      }

      function remove() {
        //console.log("remove", vm.transaction);
        vm.transaction.$delete()
          .then(function(response){
            //console.log(response);
            //remove the element from local array
            removeElement(vm.transactions, vm.transaction);
            //vm.transactions = transaction.query();
            //replace edit area with prototype instance
            newTransaction();
          })
          .catch(handleError);                
      }


      function removeElement(elements, element) {
        for (var i=0; i<elements.length; i++) {
          if (elements[i].id == element.id) {
            elements.splice(i,1);
            break;
          }        
        }        
      }      
  }
})();