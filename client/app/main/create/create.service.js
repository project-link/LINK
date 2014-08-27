(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('create', Create);

  /* @ngInject */
  function Create(users, links, cards) {

    this.getUsers = getUsers;
    this.createLink = createLink;
    this.createCard = createCard;

    function getUsers () {
      return users.getList();
    }

    function createLink(link) {
      return links.post(link);
    }

    function createCard(card) {
      return cards.post(card);
    }

  }

})();