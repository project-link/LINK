'use strict';

var fs = require('fs'),
    path = require('path'),
    Q = require('bluebird'),
    tmp = require('tmp'),
    ImageMagick = loquire.utils('imagemagick'),
    PhotoService = loquire.photo('service');

var createTemporaryFile = function(directory, format) {
  var deferred = Q.defer();

  var options = {
    dir: directory,
    postfix: '.' + format,
    keep: true
  };

  tmp.file(options, function(err, filepath) {
    if (err) return deferred.reject(err);
    deferred.resolve(filepath);
  });

  return deferred.promise;
};

var Photo = function(filepath) {
  this.filepath = filepath;
  this.info = null;
  this.promises = [];

  var self = this;
  this.promise = this.initialPromise = ImageMagick
    .identify(this.filepath)
    .then(function(info) {
      self.info = info;
      return info;
    });
};


Photo.prototype.getInfo = function(callback) {
  if (callback) {
    return this.initialPromise.then(callback);
  } else {
    return this.initialPromise;
  }
};

Photo.prototype.getStream = function() {
  return fs.createReadStream(this.filepath);
};

Photo.prototype.removeFile = function() {
  var deferred = Q.defer();
  fs.unlink(this.filepath, function() {
    deferred.resolve();
  });
  return deferred.promise;
};

Photo.prototype.wait = function(callback) {
  var promises = this.promises;
  this.promises = [];
  this.promise = callback ? Q.all(promises).spread(callback) : Q.all(promises);
  return this.promise;
};

Photo.prototype.create = function(options, callback) {
  options = options || {};
  var quality = options.quality || 75;
  var density = options.density || 72;
  var maxArea = options.maxArea || 1000000;

  var self = this;
  this.promise = this.promise.then(function() {
    var info = self.info;

    var workingDirectory = options.workingDirectory || path.dirname(info.filepath);
    var format = options.format ? options.format.toLowerCase() : info.format.toLowerCase();

    quality = info.quality ? Math.min(info.quality, quality) : quality;
    maxArea = info.width * info.height < maxArea ? info.width * info.height : maxArea;

    return createTemporaryFile(workingDirectory, format)
      .then(function(optimizedFilepath) {
        return ImageMagick.convert(info.filepath, optimizedFilepath, {
          quality: quality,
          density: density,
          maxArea: maxArea
        });
      })
      .then(function(filepath) {
        var photo = new Photo(filepath);
        if (callback) return callback(photo);
        else return photo;
      });
  });
  this.promises.push(this.promise);
  return this;
};

exports.Photo = Photo;

exports.save = function(path, owner, options) {
  var name = options.name || 'photo';

  var original = new Photo(path);
  var converted;

  return original.create()
    .wait(function(result) {
      converted = result;
      return converted.getInfo();
    })
    .then(function(info) {
      return PhotoService
        .create({
          owner: owner,
          name: name,
          type: info.mimetype,
          width: info.width,
          height: info.height,
          size: info.filesize
        }, converted.getStream());
    })
    .then(function(photo) {
      return Q.all([
          converted.removeFile(),
          original.removeFile()
        ])
        .return(photo);
    });
};
