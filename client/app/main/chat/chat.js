(function () {

  'use strict';

  angular
    .module('linkApp')
    .config(Config);

  /* @ngInject */
  function Config($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/chat/:cardId',
        templateUrl: 'app/main/chat/chat.html',
        controller: 'ChatCtrl'
      });
  }
  
})();