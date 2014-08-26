(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('headerMenuAlarms', HeaderMenuAlarms);

  /* @ngInject */
  function HeaderMenuAlarms() {
    return {
      templateUrl: 'app/main/directives/header/header-menu-alarms/header-menu-alarms.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();