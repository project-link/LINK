(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('cardContent', CardContent);

  /* @ngInject */
  function CardContent() {
    return {
      transclude: true,
      templateUrl: 'app/main/directives/content/card/card.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();