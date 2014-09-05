(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('footerCreate', FooterCreate);

  /* @ngInject */
  function FooterCreate($rootScope) {
    return {
      templateUrl: 'app/main/create/directives/footer-create/footer-create.html',
      restrict: 'EA',
      scope: {
        link: "="
      },
      link: function (scope, element, attrs) {
        scope.createLink = createLink;

        function createLink(link) {
          console.log('createLink');
          $rootScope.$broadcast('create:create-link', link);
        };
      }
    };
  }

})();