(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('ChatCtrl', ChatCtrl);

  /* @ngInject */
  function ChatCtrl($scope, $rootScope, $stateParams, $interval, chatService) {
    
    $scope.card = {};
    $scope.card.messages = [];

    $scope.sendMessage = sendMessage;
    

    activate();

    

    function activate(){
      initState();
      initData();
    };

    function initState() {
      $scope.card = {
        id: $stateParams.cardId,
        from: $rootScope.sessionInfo.user.id
      };
    }

    function initData() {
      initMessages();
    };
    
    function sendMessage(text) {
    
      // from, card, text, photo, 
      var message = {
        from: $scope.card.from,
        card: $scope.card.id,
        text: text
      }

      chatService
        .sendMessage(message)
        .then(function(response){
          $scope.card.text = '';

          //TEST 
          initMessages();
          $rootScope.scrollTo('card-chat-line');
        });
    }

    function initMessages() {
      chatService.getMessages().then(function(messages){
        $scope.card.messages = messages;
      }, function(error){
        console.log('error:', error);
      });
    }
  }

})();
