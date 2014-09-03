(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, $state, lnNoty, authService) {
    
    $scope.login = login;

    activate();



    function activate() {
      showKeyboard();
    };

    function showKeyboard() {
      if(typeof SoftKeyboard !== 'undefined') {
        SoftKeyboard.show(function () {
          // success
        },function () {
          // fail
        });
      }
    }
    
    function login(user) {
      authService.login(user)
        .then(function(response){
          $state.go('cards');
        })
        .catch(lnNoty.error);
    }

  };

})();
