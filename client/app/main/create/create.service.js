(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('create', Create);

  /* @ngInject */
  function Create(users, links) {

    this.getUsers = getUsers;
    this.createLink = createLink;

    function getUsers () {
      return users.getList();
    }

    function createLink(link) {
      return links.post(link);
    }

  }

})();