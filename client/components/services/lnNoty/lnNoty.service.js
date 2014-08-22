(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('lnNoty', lnNoty);

  /* @ngInject */
  function lnNoty($timeout) {

    this.success = function(msg, layout) {
      alert('success', msg, layout);
    };

    this.information = function(msg, layout) {
      alert('information', msg, layout);
    };

    this.warning = function(msg, layout) {
      alert('warning', msg, layout);
    };

    this.error = function(error) {      
      var code = error.data.error.code;
      alert('error', code, 'toast-top-full-width');
    };

    function alert(type, msg, layout, title) {
      toastr.options.positionClass = layout || 'toast-top-right';
      toastr.options.timeOut = "3000";
      toastr[type]('<br>' + msg + '<br><br>', title);
    }
  }

})();