(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('cardChatGroup', CardChatGroup);

  /* @ngInject */
  function CardChatGroup() {
    return {
      templateUrl: 'app/main/directives/content/card/card-chat-group/card-chat-group.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();