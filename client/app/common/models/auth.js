(function() {

  'use strict';

  angular
    .module('linkApp')
    .factory('auth', auth);

  /* @ngInject */
  function auth (Restangular) {
    var model = Restangular.all('auth');

    return model;

  }

})();