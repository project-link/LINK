(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('validateErrorName', ValidateErrorName);

  /* @ngInject */
  function ValidateErrorName() {
    return {
      templateUrl: 'app/landing/directives/validate-error-name/validate-error-name.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();