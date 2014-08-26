(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('cardChatContent', CardChatContent);

  /* @ngInject */
  function CardChatContent() {
    return {
      templateUrl: 'app/main/directives/content/card/card-chat-content/card-chat-content.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();