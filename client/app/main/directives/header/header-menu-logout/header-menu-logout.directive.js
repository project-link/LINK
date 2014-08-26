(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('headerMenuLogout', HeaderMenuLogout);

  /* @ngInject */
  function HeaderMenuLogout() {
    return {
      templateUrl: 'app/main/directives/header/header-menu-logout/header-menu-logout.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();