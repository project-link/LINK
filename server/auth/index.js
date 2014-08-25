'use strict';

var express = require('express');

// Passport Configuration
require('./local/passport').setup();
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);

var router = express.Router();

router.use('/auth/local', require('./local'));
// router.use('/auth/facebook', require('./facebook'));
// router.use('/auth/twitter', require('./twitter'));
// router.use('/auth/google', require('./google'));

module.exports = router;
