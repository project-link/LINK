(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelLinkName', PanelLinkName);

  /* @ngInject */
  function PanelLinkName() {
    return {
      templateUrl: 'app/main/directives/content/panel/panel-link-name/panel-link-name.html',
      restrict: 'EA',
      scope: {
        link: "="
      },
      link: function (scope, element, attrs) {
      }
    };
  }

})();