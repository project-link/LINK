'use strict';

var LinkService = loquire.link('service');

exports.list = function(req, res, next) {
  LinkService.list()
    .then(function(links) {
      res.finish({
        data: links
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.read = function(req, res, next) {
  LinkService.read(req.link)
    .then(function(link) {
      res.finish({
        data: link
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.create = function(req, res, next) {
  LinkService.create(req.body)
    .then(function(link) {
      res.finish({
        data: link
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.update = function(req, res, next) {
  delete req.body.id;

  LinkService.update(req.link, req.body)
    .then(function(link) {
      res.finish({
        data: link
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  LinkService.delete(req.link)
    .then(function(link) {
      res.finish({
        data: link
      });
    })
    .catch(function(err) {
      next(err);
    });
};
