(function () {

  'use strict';

  angular
    .module('linkApp')
    .config(Config);

  /* @ngInject */
  function Config($stateProvider) {
    $stateProvider
      .state('cards', {
        url: '/cards',
        templateUrl: 'app/main/cards/cards.html',
        controller: 'CardsCtrl'
      });
  }
  
})();