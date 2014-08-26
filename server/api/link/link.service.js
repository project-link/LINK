'use strict';

var Link = loquire.link('model'),
    ValidationUtil = loquire.utils('validation');

exports.create = function(contents) {
  return ValidationUtil.requiresAndRemains(
      contents,
      ['users'],
      ['name', 'description', 'users']
    )
    .then(function() {
      return Link.new(contents);
    })
    .then(function(link) {
      return link.specify();
    });
};

exports.preload = function(id) {
  return Link.get(id);
};

exports.read = function(link) {
  return link.specify();
};

exports.list = function(options) {
  return Link.list(options);
};

exports.update = function(link, contents) {
  return ValidationUtil.remains(contents, ['name', 'description', 'users'])
    .then(function(contents) {
      return link.persist(contents);
    })
    .then(function(link) {
      return link.specify();
    });
};

exports.delete = function(link) {
  return link.delete()
    .then(function(link) {
      return link.specify();
    });
};
