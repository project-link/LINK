(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('headerMenuClose', HeaderMenuClose);

  /* @ngInject */
  function HeaderMenuClose() {
    return {
      templateUrl: 'app/main/directives/header/header-menu-close/header-menu-close.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();