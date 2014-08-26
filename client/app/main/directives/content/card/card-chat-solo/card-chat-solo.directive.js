(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('cardChatSolo', CardChatSolo);

  /* @ngInject */
  function CardChatSolo() {
    return {
      templateUrl: 'app/main/directives/content/card/card-chat-solo/card-chat-solo.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();