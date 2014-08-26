(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelJoinMembers', PanelJoinMembers);

  /* @ngInject */
  function PanelJoinMembers() {
    return {
      templateUrl: 'app/main/directives/content/panel/panel-join-members/panel-join-members.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();