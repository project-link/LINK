(function(){

  'use strict';

  angular
    .module('linkApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'gettext',
    'restangular',
    'ngCordova',
    'ngAnimate-animate.css'
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

  function run ($rootScope, $location, $anchorScroll, authService, gettextCatalog, Restangular) {
    
    $rootScope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    
    Restangular.setBaseUrl('api');
    Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {

      var extractedData;
      if (operation === "getList") {
        extractedData = data.data;
      } else {
        extractedData = data;
      }
      
      return extractedData;
    });



    // TODO - default language setting through Locale Info.
    gettextCatalog.currentLanguage = 'ko_KR';
    


    var loginNotRequired = ['landing', 'signup', 'login'];

    var isLoginNotRequired = function (route) {
      return _.find(loginNotRequired,
        function (noAuthRoute) {
          return route === noAuthRoute;
        });
    };

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if(!isLoginNotRequired(next.name) && !authService.isSignin()) {
        $location.url('login');
      }
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