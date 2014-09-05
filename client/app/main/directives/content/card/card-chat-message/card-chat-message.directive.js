(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('cardChatMessage', CardChatMessageDrtv);

  function CardChatMessageDrtv() {
    return {
      templateUrl: 'app/main/directives/content/card/card-chat-message/card-chat-message.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();