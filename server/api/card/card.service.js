'use strict';

var Card = loquire.card('model'),
    ValidationUtil = loquire.utils('validation');

exports.create = function(contents) {
  return ValidationUtil.requiresAndRemains(
      contents,
      ['type', 'link'],
      ['type', 'link']
    )
    .then(function() {
      return Card.new(contents);
    })
    .then(function(card) {
      return card.specify();
    });
};

exports.preload = function(id) {
  return Card.get(id);
};

exports.read = function(card) {
  return card.specify();
};

exports.list = function(options) {
  return Card.list(options);
};

exports.update = function(card, contents) {
  return ValidationUtil.remains(contents, [])
    .then(function(contents) {
      return card.persist(contents);
    })
    .then(function(card) {
      return card.specify();
    });
};

exports.delete = function(card) {
  return card.delete()
    .then(function(card) {
      return card.specify();
    });
};
