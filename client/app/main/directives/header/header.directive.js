(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('header', HeaderDrtv);

  function HeaderDrtv($location, Auth) {
    return {
      templateUrl: 'app/main/directives/header/header.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.menu = [{
          'title': 'Home',
          'link': '/'
        }];

        scope.isCollapsed = true;
        scope.isLoggedIn = Auth.isLoggedIn;
        scope.isAdmin = Auth.isAdmin;
        scope.getCurrentUser = Auth.getCurrentUser;

        scope.logout = function() {
          Auth.logout();
          $location.path('/login');
        };

        scope.isActive = function(route) {
          return route === $location.path();
        };
      }
    };
  }

})();