(function() {

  'use strict';

  angular
    .module('linkApp')
    .filter('lnMoment', LnMoment);

  /* @ngInject */
  function LnMoment() {
    return function (date) {
      return moment(date).fromNow();
    };
  }

})();
