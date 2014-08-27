'use strict';

var express = require('express');
var controller = loquire.message('controller');
var authentication = loquire.components('authentication');
var preloading = loquire.components('preloading');

var router = express.Router();

router.get('/messages', [
  authentication.authenticate,
  controller.list
]);

router.post('/messages', [
  authentication.authenticate,
  controller.create
]);

router.get('/messages/:message', [
  authentication.authenticate,
  preloading.requiresMessage,
  controller.read
]);

router.put('/messages/:message', [
  authentication.authenticate,
  preloading.requiresMessage,
  controller.update
]);

router.delete('/messages/:message', [
  authentication.authenticate,
  preloading.requiresMessage,
  controller.delete
]);

module.exports = router;
