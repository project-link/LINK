'use strict';

var express = require('express');
var controller = loquire.card('controller');
var authentication = loquire.components('authentication');
var preloading = loquire.components('preloading');

var router = express.Router();

router.get('/cards', [
  authentication.authenticate,
  controller.list
]);

router.post('/cards', [
  authentication.authenticate,
  controller.create
]);

router.get('/cards/:card', [
  authentication.authenticate,
  preloading.requiresCard,
  controller.read
]);

router.put('/cards/:card', [
  authentication.authenticate,
  preloading.requiresCard,
  controller.update
]);

router.delete('/cards/:card', [
  authentication.authenticate,
  preloading.requiresCard,
  controller.delete
]);

module.exports = router;
