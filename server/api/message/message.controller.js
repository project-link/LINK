'use strict';

var MessageService = loquire.message('service');

exports.list = function(req, res, next) {
  MessageService.list()
    .then(function(messages) {
      res.finish({
        data: messages
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.read = function(req, res, next) {
  MessageService.read(req.message)
    .then(function(message) {
      res.finish({
        data: message
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.create = function(req, res, next) {
  req.body.from = req.me.id;

  MessageService.create(req.body)
    .then(function(message) {
      res.finish({
        data: message
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.update = function(req, res, next) {
  delete req.body.id;

  MessageService.update(req.message, req.body)
    .then(function(message) {
      res.finish({
        data: message
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  MessageService.delete(req.message)
    .then(function(message) {
      res.finish({
        data: message
      });
    })
    .catch(function(err) {
      next(err);
    });
};
