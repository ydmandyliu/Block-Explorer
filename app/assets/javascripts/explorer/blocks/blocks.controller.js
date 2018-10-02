(function() {
  "use strict";

  angular
    .module("explorer.blocks")
    .controller("explorer.blocks.BlocksController", BlocksController);

  BlocksController.$inject = ["explorer.blocks.Block"];

  function BlocksController(block) {
      var vm = this;
      vm.blocks;
      vm.block;
      vm.edit   = edit;
      vm.create = create;
      vm.update = update;
      vm.remove = remove;      

      activate();
      return;
      ////////////////
      function activate() {
        newBlock();
        vm.blocks = Block.query();
      }

      function newBlock() {
        vm.block = new Block();
      }
      function handleError(response) {
        console.log(response);
      } 
      function edit(object) {
        console.log("selected", object);
        vm.block = object;        
      }

      function create() {
        //console.log("creating block", vm.block);
        vm.block.$save()
          .then(function(response){
            //console.log(response);
            vm.blocks.push(vm.block);
            newBlock();
          })
          .catch(handleError);        
      }

      function update() {
        //console.log("update", vm.block);
        vm.block.$update()
          .then(function(response){
            //console.log(response);
        })
        .catch(handleError);        
      }

      function remove() {
        //console.log("remove", vm.block);
        vm.block.$delete()
          .then(function(response){
            //console.log(response);
            //remove the element from local array
            removeElement(vm.blocks, vm.block);
            //vm.blocks = block.query();
            //replace edit area with prototype instance
            newBlock();
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