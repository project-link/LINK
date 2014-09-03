(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('panelUsers', PanelUsers);

  /* @ngInject */
  function PanelUsers($rootScope) {
    return {
      templateUrl: 'app/main/directives/content/panel/panel-users/panel-users.html',
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