(function() {

  'use strict';

  angular
    .module('linkApp')
    .filter('lnMessage', LnMessage);

  /* @ngInject */
  function LnMessage() {

    return function(messages) {

      var filtered = [];
      var preMessage = {};
      angular.forEach(messages, function(item) {
        item.preMessage = preMessage;
        filtered.push(item);
        preMessage = item;
      });

      return filtered;
    };
  }

})();
