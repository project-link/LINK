(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('loginForm', LoginForm);

  /* @ngInject */
  function LoginForm() {
    return {
      templateUrl: 'app/landing/directives/login-form/login-form.html',
      restrict: 'EA',
      scope: {
        submit: "&"
      },
      link: function (scope, element, attrs) {
      }
    };
  }

})();