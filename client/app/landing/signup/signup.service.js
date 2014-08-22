(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('signupService', SignupService);

  /* @ngInject */
  function SignupService(authService) {
    
    this.signup = signup;

    function signup (user) {
      authService.signup(user);
    }


  }

})();