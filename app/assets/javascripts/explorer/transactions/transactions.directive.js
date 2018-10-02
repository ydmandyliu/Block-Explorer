(function() {
  "use strict";

  angular
    .module("explorer.transactions")
    .directive("beTransactions", TransactionsDirective);

  TransactionsDirective.$inject = ["explorer.config.APP_CONFIG"];

  function TransactionsDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.transactions_html,
        replace: true,
        bindToController: true,
        controller: "explorer.transactions.TransactionsController",
        controllerAs: "transactionsVM",
        restrict: "E",
        scope: {},
        link: link
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("TransactionsDirective", scope);
    }
  }

})();
