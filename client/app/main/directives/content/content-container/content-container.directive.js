(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('contentContainer', ContentContainer);

  /* @ngInject */
  function ContentContainer() {
    return {
      transclude: true,
      templateUrl: 'app/main/directives/content/content-container/content-container.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();