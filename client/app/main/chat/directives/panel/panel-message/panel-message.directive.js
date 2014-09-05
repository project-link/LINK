(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelMessage', PanelMessageDrtv);

  function PanelMessageDrtv() {
    return {
      templateUrl: 'app/main/chat/directives/panel/panel-message/panel-message.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();