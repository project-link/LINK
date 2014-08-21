(function () {

  'use strict';

  angular
    .module('linkApp')
    .config(Config);

  /* @ngInject */
  function Config($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/landing/signup/signup.html',
        controller: 'SignupCtrl'
      });
  }
  
})();