(function() {

  'use strict';

  angular.module('linkApp')
    .service('authService', authService);

  /* @ngInject */
  function authService($rootScope, storageService, users, auth, Restangular) {

    var sessionStorageKey = '_SG_SESSION_INFO_';
    $rootScope.sessionInfo = storageService.getValue(sessionStorageKey) || {};
    Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + $rootScope.sessionInfo.token});

    
    this.login              = login;
    this.signup             = signup;
    this.logout             = logout;

    this.setToken           = setToken;
    this.setSession         = setSession;
    this.setSessionUser     = setSessionUser;
    this.updateSessionUser  = updateSessionUser;
    this.removeSession      = removeSession;
    
    
    this.getMe              = getMe;
    this.isSignin           = isSignin;


    function login (user) {
      return auth.customPOST(user, 'local').then(function(response){
        setSession(response.data, response.token);
        return response;
      });      
    }

    function signup (user) {
      return users.post(user).then(function(response){
        setSession(response.data, response.token);
        return response;
      });
    }

    function logout () {
      removeSession();
    }

    function setSessionUser (user) {
      if(user) {
        $rootScope.sessionInfo.user   = user;
        storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
      }
    }

    function getMe () {
      return $rootScope.sessionInfo.user;
    }

    // TODO
    function updateSessionUser () {
      return session.one().get().then(function(response){
        if(response.data) {
          $rootScope.sessionInfo.user = response.data;
          storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
        }
        return response;
      });
    }

    function setToken (token) {
      if(token) {
        $rootScope.sessionInfo.token  = token;
        Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token});

        storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
      }
    }

    function setSession (user, token) {
      $rootScope.sessionInfo.user = user;
      $rootScope.sessionInfo.token = token;
      Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token});

      storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
    }

    function removeSession () {
      $rootScope.sessionInfo = {};
      storageService.removeValue(sessionStorageKey);

      Restangular.setDefaultHeaders({'Authorization': null});
    }

    function isSignin () {
      if($rootScope.sessionInfo.user && $rootScope.sessionInfo.user.id, $rootScope.sessionInfo.token) {
        return true;
      } else {
        return false;
      }
    }

  }

})();