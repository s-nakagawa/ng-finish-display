(function () {
  'use strict';

  angular
    .module('ngFinishDisplay')
    .directive('ngFinishDisplay', ngFinishDisplay);

  /** @ngInject */
  function ngFinishDisplay() {
    var directive = {
      restrict: 'E',
      scope: {
        notifyId: '<'
      },
      /**
       * インスタンス化されたタイミングで通知する。
       */
      link: function (scope) {
        scope.$emit(scope.notifyId);
      }
    };
    return directive;
  }
})();
