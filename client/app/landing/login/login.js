(function () {

  'use strict';

  angular
    .module('linkApp')
    .config(Config);

  /* @ngInject */
  function Config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/landing/login/login.html',
        controller: 'LoginCtrl'
      });
  }
  
})();