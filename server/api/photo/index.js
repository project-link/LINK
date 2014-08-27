'use strict';

var express = require('express');
var controller = loquire.photo('controller');
var authentication = loquire.components('authentication');
var preloading = loquire.components('preloading');

var router = express.Router();

router.post('/photos', [
  authentication.authenticate,
  controller.create
]);

router.get('/photos/:photo', [
  preloading.requiresPhoto,
  controller.read
]);

module.exports = router;
