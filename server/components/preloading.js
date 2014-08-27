'use strict';

var UserService = loquire.user('service');
var LinkService = loquire.link('service');
var CardService = loquire.card('service');
var MessageService = loquire.message('service');
var PhotoService = loquire.photo('service');

exports.requiresMe = function(req, res, next) {
  UserService
    .preload(req.login.id)
    .then(function(user) {
      req.me = user;
      next();
    })
    .catch(function(err) {
      next(err);
    });
};

exports.requiresUser = function(req, res, next) {
  UserService
    .preload(req.params.user)
    .then(function(user) {
      req.user = user;
      next();
    })
    .catch(function(err) {
      next(err);
    });
};

exports.requiresUserFromMe = function(req, res, next) {
  req.user = req.me;
  next();
};

exports.requiresLink = function(req, res, next) {
  LinkService
    .preload(req.params.link)
    .then(function(link) {
      req.link = link;
      next();
    })
    .catch(function(err) {
      next(err);
    });
};

exports.requiresCard = function(req, res, next) {
  CardService
    .preload(req.params.card)
    .then(function(card) {
      req.card = card;
      next();
    })
    .catch(function(err) {
      next(err);
    });
};

exports.requiresMessage = function(req, res, next) {
  MessageService
    .preload(req.params.message)
    .then(function(message) {
      req.message = message;
      next();
    })
    .catch(function(err) {
      next(err);
    });
};

exports.requiresPhoto = function(req, res, next) {
  PhotoService
    .preload(req.params.photo)
    .then(function(photo) {
      req.photo = photo;
      next();
    })
    .catch(function(err) {
      next(err);
    });
};
