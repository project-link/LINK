(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('signupService', SignupService);

  /* @ngInject */
  function SignupService(users, sessionService) {
    
    this.signup = signup;

    //
    function signup (user) {
    return users.post(user).then(function(response){
      sessionService.setSession(response.user, response.token);
      return response;
    });
  }


  }

})();