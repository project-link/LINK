(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('landingFooter', LandingFooter);

  /* @ngInject */
  function LandingFooter() {
    return {
      templateUrl: 'app/landing/directives/landing-footer/landing-footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();