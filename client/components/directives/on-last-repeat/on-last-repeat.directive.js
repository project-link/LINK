(function() {

  'use strict';

  angular
    .module('linkApp')
    .directive('onLastRepeat', OnLastRepeatDrtv);

  function OnLastRepeatDrtv() {
    return function(scope, element, attrs) {
      if (scope.$last) setTimeout(function(){
          scope.$emit('onRepeatLast', element, attrs);
      }, 1);
    };
  }

})();