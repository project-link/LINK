(function() {

  'use strict';

  angular
    .module('linkApp')
    .filter('lnMoment', LnMoment);

  /* @ngInject */
  function LnMoment() {
    return function (date, type) {
      if(type === 'FROM_NOW')
        return moment(date).fromNow();
      
      if(type === 'SHORT')
        return moment(date).format('h:mm a');

  
        return moment(date).format('MM/DD/YYYY, h:mm a');
    };
  }

})();
