(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('loginService', LoginService);

  /* @ngInject */
  function LoginService(session, sessionService) {

    this.login = login;


    ///
    function login(user) {
      return session.post(user).then(function(response){
        sessionService.setSession(response.user, response.token);
        return response;
      });
    }
  }

})();