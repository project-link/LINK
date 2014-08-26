(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('footerContainer', FooterContainer);

  /* @ngInject */
  function FooterContainer() {
    return {
      transclude: true,
      templateUrl: 'app/main/directives/footer/footer-container/footer-container.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();