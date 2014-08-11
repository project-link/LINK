(function(){

  'use strict';

  angular
    .module('linkApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap'
  ])
    .config(config)
    .run(run);


  function config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $provide) {
    $urlRouterProvider
      .otherwise('/');
    
    // $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthinterceptorFtry');

    $provide.decorator('$exceptionHandler',
        ['$delegate', '$log', extendExceptionHandler]);
  };

  function run ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  }

  function extendExceptionHandler($delegate, $log) {

    // toaster.pop('error', 'test', 'test');

    return function (exception, cause) {
        $delegate(exception, cause);
        var errorData = {
            exception: exception,
            cause: cause
        };
        var msg = 'ERROR PREFIX' + exception.message;
        $log.error(msg, errorData);

        // Log during dev with http://toastrjs.com
        // or any other technique you prefer
        toastr.error(msg);
    };
  }

})();