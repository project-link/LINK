'use strict';

var Q = require('bluebird'),
    _ = require('lodash');

exports.persist = function(contents) {
  var deferred = Q.defer();

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

  this.populate('link', function(err, self) {
    if (err) return deferred.reject(err);

    deferred.resolve(self);
  });

  return deferred.promise;
};
