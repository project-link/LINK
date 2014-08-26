(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelUsers', PanelUsers);

  /* @ngInject */
  function PanelUsers() {
    return {
      templateUrl: 'app/main/directives/content/panel/panel-users/panel-users.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();