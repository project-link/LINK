(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('footerCreate', FooterCreate);

  /* @ngInject */
  function FooterCreate() {
    return {
      templateUrl: 'app/main/directives/footer/footer-create/footer-create.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();