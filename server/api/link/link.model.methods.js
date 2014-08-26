'use strict';

var Q = require('bluebird'),
    _ = require('lodash');

exports.persist = function(contents) {
  var deferred = Q.defer();

  contents.users = _.map(contents.users, function(user) {
    return { _id: user };
  });

  _.forOwn(contents, function(value, key) {
    this[key] = value;
  }, this);

  this.save(function(err, self) {
    if (err) return deferred.reject(err);

    deferred.resolve(self);
  });

  return deferred.promise;
};

exports.delete = function() {
  return this.persist({ deleted_at: new Date() });
};

exports.specify = function() {
  var deferred = Q.defer();

  this.populate('users._id', function(err, self) {
    if (err) return deferred.reject(err);

    deferred.resolve(self);
  });

  return deferred.promise;
};
