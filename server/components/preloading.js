'use strict';

var UserService = loquire.user('service');

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
