(function () {
  'use strict';

  function ChildController() {
    var vm = this;

    var itemList = [];
    for(var index = 1; index <= 3; index++) {
      var object = {
        id: 'child-book-' + index,
        name: 'child-book name ' + index
      };
      itemList.push(object);
    }
    vm.itemList = itemList;
  }

  angular.module('ngFinishDisplay').component('child', {
    templateUrl: 'app/components/child/child.html',
    controller: ChildController,
    controllerAs: 'ctrl'
  });
})();