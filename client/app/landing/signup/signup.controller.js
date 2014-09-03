(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('SignupCtrl', SignupCtrl);

  /* @ngInject */
  function SignupCtrl($scope, $state, lnNoty, authService) {
    $scope.signup = signup;
    
    function signup (user) {
        authService.signup(user)
          .then(function(response){
            $state.go('cards');
          })
          .catch(lnNoty.error);
    }
  }

})();
