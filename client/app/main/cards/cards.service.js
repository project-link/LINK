(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('cardsService', cardsService);

  /* @ngInject */
  function cardsService(cards) {

    this.getCards = getCards;


    function getCards() {
      return cards.getList();
    }
  }

})();