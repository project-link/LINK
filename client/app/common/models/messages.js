(function() {

  'use strict';

  angular
    .module('linkApp')
    .factory('messages', messages);

  /* @ngInject */
  function messages(Restangular) {
    var model = Restangular.all('messages');
    model.one = function(id) {
      return Restangular.one('messages', id);
    };

    return model;
  }

})();