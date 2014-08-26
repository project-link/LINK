(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('validateErrorEmail', ValidateErrorEmail);

  /* @ngInject */
  function ValidateErrorEmail() {
    return {
      templateUrl: 'app/landing/directives/validate-error-email/validate-error-email.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();