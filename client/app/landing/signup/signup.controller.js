(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('SignupCtrl', SignupCtrl);

  /* @ngInject */
  function SignupCtrl($scope, $state, lnNoty, authService) {

    $scope.signup = signup;
    $scope.submitted = false;

    function signup (form) {

      $scope.submitted = true;

      if(form.$valid) {
        var user = $scope.user;
        authService.signup(user)
          .then(function(response){
            $state.go('cards');
          })
          .catch(lnNoty.error);
      }
    }

  }

})();
