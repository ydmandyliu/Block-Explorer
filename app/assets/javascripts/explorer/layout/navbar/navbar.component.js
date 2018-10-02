(function() {
  "use strict";

  angular
    .module("explorer.layout")
    .component("beNavbar", {
      templateUrl: templateUrl
      // controller: NavbarController
    });


  templateUrl.$inject = ["explorer.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.navbar_html;
  }    

})();