(function() {

  'use strict';

  angular
    .module('linkApp')
    .factory('cards', cards);

  /* @ngInject */
  function cards(Restangular) {
    var model = Restangular.all('cards');
    model.one = function(id) {
      return Restangular.one('cards', id);
    };

    return model;
  }

})();