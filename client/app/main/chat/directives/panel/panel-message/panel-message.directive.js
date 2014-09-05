(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelMessage', PanelMessageDrtv);

  /* @ngInject */
  function PanelMessageDrtv(authService) {
    return {
      templateUrl: 'app/main/chat/directives/panel/panel-message/panel-message.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.isMine = isMine;

        function isMine(userId) {
          return authService.getMe().id == userId;
        }
      }
    };
  }

})();