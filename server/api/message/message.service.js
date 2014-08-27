'use strict';

var Message = loquire.message('model'),
    ValidationUtil = loquire.utils('validation');

exports.create = function(contents) {
  return ValidationUtil.requiresAndRemains(
      contents,
      ['from', 'card'],
      ['from', 'card', 'text', 'photo']
    )
    .then(function() {
      return Message.new(contents);
    })
    .then(function(message) {
      return message.specify();
    });
};

exports.preload = function(id) {
  return Message.get(id);
};

exports.read = function(message) {
  return message.specify();
};

exports.list = function(options) {
  return Message.list(options);
};

exports.update = function(message, contents) {
  return ValidationUtil.remains(contents, [])
    .then(function(contents) {
      return message.persist(contents);
    })
    .then(function(message) {
      return message.specify();
    });
};

exports.delete = function(message) {
  return message.delete()
    .then(function(message) {
      return message.specify();
    });
};
