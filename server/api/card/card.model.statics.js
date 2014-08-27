'use strict';

var Q = require('bluebird'),
    errors = loquire.config('errors');

exports.new = function(contents) {
  var deferred = Q.defer();

  this
    .create(contents, function(err, self) {
      if (err) return deferred.reject(err);

      deferred.resolve(self);
    });

  return deferred.promise;
};

exports.get = function(id, includeDeleted) {
  var deferred = Q.defer();

  var conditions = {
    _id: id
  };
  if (!includeDeleted) conditions.deleted_at = { $exists: false };

  this
    .findOne(conditions)
    .exec(function(err, self) {
      if (err) {
        if (err.name === 'CastError' && err.type === 'ObjectId') {
          return deferred.reject(new errors.CardNotFoundError(id));
        } else {
          return deferred.reject(err);
        }
      }

      if (!self) return deferred.reject(new errors.CardNotFoundError(id));

      deferred.resolve(self);
    });

  return deferred.promise;
};

exports.list = function() {
  var deferred = Q.defer();

  var query = this.find();

  query.where('deleted_at').exists(false);

  query.populate('link');

  query.sort('-created_at');

  query.exec(function(err, selves) {
    if (err) return deferred.reject(err);

    deferred.resolve(selves);
  });

  return deferred.promise;
};
