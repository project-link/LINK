/**
 * Main application routes
 */

'use strict';

var errors = loquire.config('errors'),
    ApiNotFoundError = errors.ApiNotFoundError;

module.exports = function(app) {
  app.use('/api/', loquire.user());
  app.use('/api/', loquire.auth());
  app.use('/api/', loquire.link());
  app.use('/api/', loquire.card());
  app.use('/api/', loquire.message());
  app.use('/api/', loquire.photo());

  app.route('/api/*')
    .all(function(req, res, next) {
      next(new ApiNotFoundError(req.url));
    });
};
