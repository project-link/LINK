(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('CardsCtrl', CardsCtrl);

  /* @ngInject */
  function CardsCtrl($scope, $state, authService, cardsService) {

    $scope.cards = [];

    $scope.logout = logout;

    

    init();


    function init() {
      initData();
    }

    function initData() {

      cardsService
        .getCards()
        .then(function(cards){
          $scope.cards = cards;
        })
    }




    function logout() {
      authService.logout();
      $state.go('login');
    }
  }

})();
