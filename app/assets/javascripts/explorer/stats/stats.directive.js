(function() {
  "use strict";

  angular
    .module("explorer.stats")
    .directive("beStats", StatsDirective);

  StatsDirective.$inject = ["explorer.config.APP_CONFIG"];

  function StatsDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.stats_html,
        replace: true,
        bindToController: true,
        controller: "explorer.stats.StatsController",
        controllerAs: "statsVM",
        restrict: "E",
        scope: {},
        link: link
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("StatsDirective", scope);
    }
  }

})();
