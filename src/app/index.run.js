(function() {
  'use strict';

  angular
    .module('ngFinishDisplay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
