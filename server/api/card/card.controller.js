'use strict';

var CardService = loquire.card('service');

exports.list = function(req, res, next) {
  CardService.list()
    .then(function(cards) {
      res.finish({
        data: cards
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.read = function(req, res, next) {
  CardService.read(req.card)
    .then(function(card) {
      res.finish({
        data: card
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.create = function(req, res, next) {
  CardService.create(req.body)
    .then(function(card) {
      res.finish({
        data: card
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.update = function(req, res, next) {
  delete req.body.id;

  CardService.update(req.card, req.body)
    .then(function(card) {
      res.finish({
        data: card
      });
    })
    .catch(function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  CardService.delete(req.card)
    .then(function(card) {
      res.finish({
        data: card
      });
    })
    .catch(function(err) {
      next(err);
    });
};
