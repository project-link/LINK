(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('footerChat', FooterChat);

  /* @ngInject */
  function FooterChat() {
    return {
      templateUrl: 'app/main/directives/footer/footer-chat/footer-chat.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();