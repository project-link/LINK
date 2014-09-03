(function() {

  'use strict';

  angular
    .module('linkApp')
    .service('create', Create);

  /* @ngInject */
  function Create($rootScope, users, links, cards) {

    this.getUsers = getUsers;
    this.createLink = createLink;
    this.createCard = createCard;

    function getUsers () {
      return users.getList();
    }

    function createLink(link) {

      var linkData = {};
      angular.copy(link, linkData);


      if(_.isEmpty(linkData.name)){
        setDefaultLinkName(linkData);
      }

      linkData.users = _.map(linkData.users, function(user) {
        return user.id;
      });

      // add mine
      linkData.users.push($rootScope.sessionInfo.user.id);

      
      return links.post(linkData);
    }

    function createCard(card) {
      return cards.post(card);
    }

    function setDefaultLinkName(linkData) {
      linkData.name = linkData.users[0].name + ', ' + linkData.users[1].name + ' + ' + (linkData.users.length - 1);
    }

  }

})();