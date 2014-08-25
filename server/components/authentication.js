'use strict';

var jwt = require('jsonwebtoken'),
    compose = require('composable-middleware'),
    config = loquire.config(),
    errors = loquire.config('errors'),
    preloading = require('./preloading');

exports.sign = function(user, res) {
  var token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    config.token.secret,
    {
      expiresInMinutes: config.token.expiresInMinutes
    }
  );

  res.setToken(token);
};

exports.requiresLogin = function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && /^Bearer$/i.test(parts[0])) {
      jwt.verify(parts[1], config.token.secret, {}, function(err, login) {
        if (err) {
          if (err.message === 'jwt expired') {
            return next(new errors.TokenExpiredError());
          } else {
            return next(new errors.TokenInvalidError());
          }
        }

        req.login = login;

        next();
      });
    } else {
      return next(new errors.AuthenticationInvalidError());
    }
  } else {
    return next(new errors.AuthenticationRequiredError());
  }
};

exports.authenticate = compose()
  .use(exports.requiresLogin)
  .use(preloading.requiresMe);
