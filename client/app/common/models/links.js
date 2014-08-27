(function() {

  'use strict';

  angular
    .module('linkApp')
    .factory('links', links);
  
  /* @ngInject */
  function links(Restangular) {
    var model = Restangular.all('links');
    model.one = function(id) {
      return Restangular.one('links', id);
    };

    return model;
  }

})();