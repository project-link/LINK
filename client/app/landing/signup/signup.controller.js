(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('SignupCtrl', SignupCtrl);

  /* @ngInject */
  function SignupCtrl($scope, $state, signupService) {

    $scope.signup = signup;
    $scope.submitted = false;

    function signup (form) {

      $scope.submitted = true;

      if(form.$valid) {
        var user = $scope.user;
        signupService.signup(user)
          .then(function(response){
            $state.go('cards');
          })
          .catch(function(error){
            console.log('error:', error);
          });
      }
    }

  }

})();
