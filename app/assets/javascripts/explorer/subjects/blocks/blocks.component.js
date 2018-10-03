(function() {
  "use strict";

  angular
    .module("explorer.subjects")
    .component("beBlocks", {
      templateUrl: blockTemplateUrl,
      controller: blockController
    });


  blockTemplateUrl.$inject = ["explorer.config.APP_CONFIG"];
  function blockTemplateUrl(APP_CONFIG) {
    // return APP_CONFIG.image_selector_html;
  }  

  // ImageSelectorController.$inject = ["$scope",
  //                                    "$stateParams",
  //                                    "spa-demo.authz.Authz",
  //                                    "spa-demo.subjects.Image"];
  // function ImageSelectorController($scope, $stateParams, Authz, Image) {
  //   var vm=this;

  //   vm.$onInit = function() {
  //     console.log("ImageSelectorController",$scope);
  //     $scope.$watch(function(){ return Authz.getAuthorizedUserId(); }, 
  //                   function(){ 
  //                     if (!$stateParams.id) { 
  //                       vm.items = Image.query(); 
  //                     }
  //                   });
  //   }
  //   return;
  //   //////////////
  // }

})();
