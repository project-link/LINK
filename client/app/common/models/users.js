(function() {

  'use strict';

  angular
    .module('linkApp')
    .factory('users', users);

  /* @ngInject */
  function users(Restangular) {
    var model = Restangular.all('users');
    model.one = function(id) {
      return Restangular.one('users', id);
    };

    return model;
  }

})();