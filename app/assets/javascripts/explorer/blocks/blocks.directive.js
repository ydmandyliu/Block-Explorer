(function() {
  "use strict";

  angular
    .module("explorer.blocks")
    .directive("beBlocks", BlocksDirective);

  BlocksDirective.$inject = ["explorer.config.APP_CONFIG"];

  function BlocksDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.blocks_html,
        replace: true,
        bindToController: true,
        controller: "explorer.blocks.BlocksController",
        controllerAs: "blocksVM",
        restrict: "E",
        scope: {},
        link: link
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("BlocksDirective", scope);
    }
  }

})();
