'use strict';

angular.module('linkApp')
  .factory('session', function (Restangular) {
    var model = Restangular.all('session');
    model.one = function(id) {
      return Restangular.one('session', id);
    };

    return model;

  });