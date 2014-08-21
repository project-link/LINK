'use strict';

angular.module('linkApp')
  .service('sessionService', function SessionInfo($rootScope, storageService, session, Restangular) {

    var sessionStorageKey = '_SG_SESSION_INFO_';
    $rootScope.sessionInfo = storageService.getValue(sessionStorageKey) || {};
    Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + $rootScope.sessionInfo.token});

    this.setSessionUser = function(user) {
      if(user) {
        $rootScope.sessionInfo.user   = user;
        storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
      }
    }

    this.getMe = function() {
      return $rootScope.sessionInfo.user;
    }

    this.updateSessionUser = function() {
      return Session.one().get().then(function(response){
        if(response.data) {
          $rootScope.sessionInfo.user = response.data;
          storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
        }
        return response;
      });
    }

    this.setToken = function(token) {
      if(token) {
        $rootScope.sessionInfo.token  = token;
        Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token});

        storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
      }
    }

    this.setSession = function(user, token) {
      $rootScope.sessionInfo.user = user;
      $rootScope.sessionInfo.token = token;
      Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token});

      storageService.setValue(sessionStorageKey, $rootScope.sessionInfo);
    }

    this.removeSession = function() {
      $rootScope.sessionInfo = {};
      storageService.removeValue(sessionStorageKey);

      Restangular.setDefaultHeaders({'Authorization': null});
    }

    this.isSignin = function() {
      if($rootScope.sessionInfo.user && $rootScope.sessionInfo.user.id, $rootScope.sessionInfo.token) {
        return true;
      } else {
        return false;
      }
    }

  });