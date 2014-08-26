'use strict';

angular.module('linkApp')
  .factory('links', function (Restangular) {
    var model = Restangular.all('links');
    model.one = function(id) {
      return Restangular.one('links', id);
    };

    return model;
  });
