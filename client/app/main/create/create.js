(function () {

  'use strict';

  angular
    .module('linkApp')
    .config(Config);

  /* @ngInject */
  function Config($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'app/main/create/create.html',
        controller: 'CreateCtrl'
      });
  }
  
})();