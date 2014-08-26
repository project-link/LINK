(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('landingContainer', LandingContainer);

  /* @ngInject */
  function LandingContainer() {
    return {
      transclude: true,
      templateUrl: 'app/landing/directives/landing-container/landing-container.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();