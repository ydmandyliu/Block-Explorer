(function() {
  "use strict";

  angular
    .module("explorer")
    .config(RouterFunction);

  RouterFunction.$inject = ["$stateProvider",
                            "$urlRouterProvider", 
                            "explorer.config.APP_CONFIG"];

  function RouterFunction($stateProvider, $urlRouterProvider, APP_CONFIG) {
    $stateProvider
    .state("home",{
      url: "/",
      templateUrl: APP_CONFIG.main_page_html,
      // controller: ,
      // controllerAs: ,
    }); 

    $urlRouterProvider.otherwise("/");
  }
})();