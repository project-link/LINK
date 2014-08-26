(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, loginService) {
    
    $scope.login = login;
    
    init();


    ///

    function init() {
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
    
    function login(form) {
      $scope.submitted = true;

      if(form.$valid) {
        var user = $scope.user;
        loginService.login(user)
          .then(function(response){
            $state.go('main');
          })
          .catch(function(error){
            console.log('error:', error);
          });
      }
    }

  };

})();