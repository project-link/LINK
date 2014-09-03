(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('signupForm', SignupForm);

  /* @ngInject */
  function SignupForm() {
    return {
      templateUrl: 'app/landing/directives/signup-form/signup-form.html',
      restrict: 'EA',
      scope: {
        submit: "&"
      },
      link: function (scope, element, attrs) {

        scope.signup = signup;

        function signup(form) {
          scope.submitted = true;

          if(form.$valid) {
            scope.submit({user: scope.user})
          }
        }
      }
    };
  }

})();