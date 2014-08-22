'use strict';

angular.module('linkApp')
  .factory('auth', function (Restangular) {
    var model = Restangular.all('auth');

    return model;

  });