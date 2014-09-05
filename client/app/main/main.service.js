(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('mainService', mainService);

  /* @ngInject */
  function mainService(cards) {

    this.getCards = getCards;


    function getCards() {
      return cards.getList();
    }
  }

})();