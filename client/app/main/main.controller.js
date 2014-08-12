(function(){

  'use strict';

  angular
    .module('linkApp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl ($scope, $http, socket, Auth, REMOTE_URI) {

    $scope.awesomeThings = [];

    $http.get(REMOTE_URI + '/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post(REMOTE_URI + '/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete(REMOTE_URI + '/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  }

})();