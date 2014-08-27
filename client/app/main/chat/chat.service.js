(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('chatService', chatService);

  /* @ngInject */
  function chatService(messages) {
    this.sendMessage = sendMessage;
    this.getMessages = getMessages;


    /////////////////////////////////
    function sendMessage (message) {
      return messages.post(message);
    }

    function getMessages () {
      return messages.getList();
    }
  }

})();