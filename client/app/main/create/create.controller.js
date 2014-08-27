(function() {

  'use strict';

  angular
    .module('linkApp')
    .controller('CreateCtrl', CreateCtrl);

  /* @ngInject */
  function CreateCtrl($scope, $state, $rootScope, lnNoty, create) {
    
    $scope.card = {};
    $scope.users = {};

    $scope.link = {};
    $scope.link.users = [];

    
    $scope.checkUser = checkUser;
    $scope.createLink = createLink;
    $scope.createCard = createCard;
    

    init();
  
    function init() {

      initData();
    }

    function initData() {
      getUsers();
    }  

    function getUsers() {
      create.getUsers().then(function(users){
        $scope.users = users;
      }, function(error){
        console.log('error:', error);
      });
    }

    function checkUser (user) {
      user.checked = !user.checked;
      
      if(user.checked) {
        $scope.link.users.push(user);
      } else {
        var index = $scope.link.users.indexOf(user);
        $scope.link.users.splice(index, 1);
      }
    }

    function createLink (link) {

      var linkData = {};
      angular.copy(link, linkData);

      linkData.users = _.map(linkData.users, function(user) {
        return user.id;
      });

      linkData.users.push($rootScope.sessionInfo.user.id);

      console.log(linkData.users);
      
      create
        .createLink(linkData)
        .then(function(response){
          var link = response.data;
          createCard(link);

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
          console.log('response.data:', response.data)
          var cardId = response.data.id;
          $state.go('chat', {cardId: cardId});
        })
      
    }
  }

})();
