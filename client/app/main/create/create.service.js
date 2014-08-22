(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('create', Create);

  /* @ngInject */
  function Create(users) {

    this.getUsers = getUsers;

    function getUsers () {
      return users.getList();
    }
  }

})();