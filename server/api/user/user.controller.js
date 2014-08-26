'use strict';

var authentication = loquire.components('authentication'),
    UserService = loquire.user('service');

exports.list = function(req, res, next) {
  UserService.list()
    .then(function(users) {
      res.finish({
        data: users
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.read = function(req, res, next) {
  UserService.read(req.user)
    .then(function(user) {
      res.finish({
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.create = function(req, res, next) {
  UserService.create(req.body)
    .then(function(user) {
      authentication.sign(user, res);

      res.finish({
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.update = function(req, res, next) {
  delete req.body.id;

  UserService.update(req.me, req.body)
    .then(function(user) {
      res.finish({
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  UserService.delete(req.me)
    .then(function(user) {
      res.finish({
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.password = {};

exports.password.update = function(req, res, next) {
  delete req.body.id;

  UserService.password.update(req.me, req.body)
    .then(function(user) {
      res.finish({
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};
