(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('validateErrorPassword', ValidateErrorPassword);

  /* @ngInject */
  function ValidateErrorPassword() {
    return {
      templateUrl: 'app/landing/directives/validate-error-password/validate-error-password.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();