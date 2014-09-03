(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelJoinMembers', PanelJoinMembers);

  /* @ngInject */
  function PanelJoinMembers($rootScope) {
    return {
      templateUrl: 'app/main/directives/content/panel/panel-join-members/panel-join-members.html',
      restrict: 'EA',
      scope: {
        users: "="
      },
      link: function (scope, element, attrs) {

        scope.checkUser = checkUser;

        function checkUser(user) {
          user.checked = !user.checked;
          $rootScope.$broadcast('create:check-user', user);
        }
      }
    };
  }

})();