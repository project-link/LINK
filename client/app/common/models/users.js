'use strict';

angular.module('linkApp')
  .factory('users', function (Restangular) {
    var model = Restangular.all('users');
    model.one = function(id) {
      return Restangular.one('users', id);
    };

    return model;
  });
