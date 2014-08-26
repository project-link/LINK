(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('landingLogo', LandingLogo);

  /* @ngInject */
  function LandingLogo() {
    return {
      templateUrl: 'app/landing/directives/landing-logo/landing-logo.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();