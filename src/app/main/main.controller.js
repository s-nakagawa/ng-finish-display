(function() {
  'use strict';

  angular
    .module('ngFinishDisplay')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log) {
    var vm = this;
    var itemList = [];
    for(var index = 1; index <= 24; index++) {
      var object = {
        id: 'book-' + index,
        name: 'book name ' + index
      };
      itemList.push(object);
    }
    vm.itemList = itemList;
    vm.eventName = 'finish-draw-event';

    $scope.$on(vm.eventName, function(){
      $log.info('通知');
    });
  }
})();
