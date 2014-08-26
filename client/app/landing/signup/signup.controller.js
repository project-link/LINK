(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('SignupCtrl', SignupCtrl);

  /* @ngInject */
  function SignupCtrl($scope, $state, lnNoty, authService) {
    
    $scope.signup = signup;
    $scope.submitted = false;
    
    function signup (form, user) {

      $scope.submitted = true;

      if(form.$valid) {
        authService.signup(user)
          .then(function(response){
            $state.go('cards');
          })
          .catch(lnNoty.error);
      }
    }

  }

})();
