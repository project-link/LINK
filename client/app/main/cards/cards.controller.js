(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('CardsCtrl', CardsCtrl);

  /* @ngInject */
  function CardsCtrl($scope, $state, authService) {

    $scope.logout = function() {
      authService.logout();
      $state.go('login');
    }
  }

})();
