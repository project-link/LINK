'use strict';

var errors = loquire.config('errors'),
    PhotoService = loquire.photo('service'),
    PhotoUtil = loquire.photo('util');

exports.create = function(req, res, next) {
  var user = req.me;
  var part = req.files.photo;
  var name = req.query.name || 'photo';
  var mode = req.query.mode || 'OPTIMIZED';

  if (part && part.path) {
    var owner = user.id;

    PhotoUtil
      .save(part.path, owner, {
        mode: mode,
        name: name
      })
      .then(function(photo) {
        res.finish({
          data: photo
        });
      })
      .catch(function(err) {
        next(err);
      });
  } else {
    next(new errors.PhotoRequiredError());
  }
};

var isNotModified = function(req, photo) {
  var etag = req.headers['if-none-match'];
  var hash = photo.hash;

  return etag && (etag === hash);
};

exports.read = function(req, res, next) {
  var photo = req.photo;

  if (isNotModified(req, photo)) {
    res.statusCode = 304;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', photo.type);
    res.setHeader('ETag', photo.hash);

    PhotoService
      .read(req.params.photo, res)
      .catch(function(err) {
        next(err);
      });
  }
};
