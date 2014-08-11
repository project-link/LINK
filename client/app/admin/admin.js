(function(){

  'use strict';

  angular
    .module('linkApp')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  }

})();