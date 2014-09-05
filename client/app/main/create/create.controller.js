(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('CreateCtrl', CreateCtrl);

  /* @ngInject */
  function CreateCtrl($scope, $state, $rootScope, lnNoty, create) {
    
    $scope.card = {};
    
    $scope.users = [];

    $scope.link = {};
    $scope.link.users = [];



    
    $scope.checkUser = checkUser;
    $scope.createLink = createLink;
    $scope.createCard = createCard;
    

    activate();
  
    function activate() {
      initData();
    }

    function initData() {
      initUsers();
    }  

    function initUsers() {
      create.getUsers().then(function(users){
        $scope.users = users;
      }, function(error){
        console.log('error:', error);
      });
    }

    function checkUser (user) {
      if(user.checked) {
        $scope.link.users.push(user);
      } else {
        var index = $scope.link.users.indexOf(user);
        $scope.link.users.splice(index, 1);
      }
    }

    function createLink (link) {

      create
        .createLink(link)
        .then(function(response){
          var linkData = response.data;
          createCard(linkData);

        })
        .catch(lnNoty.error);
    }
    
    function createCard (link) {

      var card = {
        type: 'CHAT',
        link: link.id
      };

      create
        .createCard(card)
        .then(function(response){
          var cardId = response.data.id;
          $state.go('chat', {cardId: cardId});
        })
    }

    $scope.$on('create:check-user', function(evt, user){
      checkUser(user);
    });

    $scope.$on('create:create-link', function(evt, link){
      console.log('create:create-link');
      createLink(link);
    });
  }

})();
