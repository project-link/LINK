(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('headerContainer', HeaderContainer);

  /* @ngInject */
  function HeaderContainer() {
    return {
      transclude: true,
      templateUrl: 'app/main/directives/header/header-container/header-container.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();