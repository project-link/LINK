(function(){

  'use strict';

  angular
    .module('linkApp')
    .config(config);


  function config ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }

})();