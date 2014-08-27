'use strict';

var Q = require('bluebird'),
    _ = require('lodash'),
    mongoose = loquire.config('mongoose'),
    gfs = mongoose.gfs,
    ObjectID = mongoose.mongo.ObjectID,
    errors = loquire.config('errors');

var ID = function(id) {
  return Q.try(function() {
    try {
      return (id instanceof ObjectID) ? id : new ObjectID(id);
    } catch (e) {
      throw new errors.PhotoNotFoundError(id);
    }
  });
};

var p2m = function(p) {
  return {
    mode: 'w',
    root: 'photos',
    filename: p.name,
    content_type: p.type,
    metadata: {
      owner: p.owner,
      width: p.width,
      height: p.height,
      size: p.size
    }
  };
};

var m2p = function(m) {
  return {
    id: m._id,
    owner: m.metadata.owner,
    name: m.filename,
    type: m.contentType,
    width: m.metadata.width,
    height: m.metadata.height,
    size: m.metadata.size,
    created_at: m.uploadDate,
    hash: m.md5
  };
};

exports.create = function(contents, reader) {
  _.forOwn(contents, function(value, key) {
    if (!_.contains(['owner', 'name', 'type', 'width', 'height', 'size'], key)) delete contents[key];
  });

  var options = p2m(contents);

  var deferred = Q.defer();

  var writer = gfs.createWriteStream(options);

  writer.on('close', function(photo) {
    if (!photo) return deferred.reject(new Error('No photo on close'));

    deferred.resolve(m2p(photo));
  });

  writer.on('error', function(err) {
    deferred.reject(err);
  });

  reader.pipe(writer);

  return deferred.promise;
};

exports.preload = function(id) {
  return ID(id)
    .then(function(_id) {
      var deferred = Q.defer();

      gfs.collection('photos')
        .findOne({
          _id: _id
        }, function(err, photo) {
          if (err) return deferred.reject(err);
          if (!photo) return deferred.reject(new errors.PhotoNotFoundError(id));

          deferred.resolve(m2p(photo));
        });

      return deferred.promise;
    });
};

exports.read = function(id, writer) {
  return ID(id)
    .then(function(_id) {
      var deferred = Q.defer();

      var options = {
        _id: _id,
        root: 'photos'
      };

      var reader = gfs.createReadStream(options);

      reader.on('end', function() {
        deferred.resolve();
      });

      reader.on('error', function(err) {
        // NOTE when the file doesn't exists,
        // error message is like '{{id}} does not exist'
        // there is no other way to figure out if the file doesn't exist
        if (err.message && err.message.indexOf('not exist') > -1) {
          return deferred.reject(new errors.PhotoNotFoundError(id));
        } else {
          return deferred.reject(err);
        }
      });

      reader.pipe(writer);

      return deferred.promise;
    });
};
