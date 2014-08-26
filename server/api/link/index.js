'use strict';

var express = require('express');
var controller = loquire.link('controller');
var authentication = loquire.components('authentication');
var preloading = loquire.components('preloading');

var router = express.Router();

router.get('/links', [
  authentication.authenticate,
  controller.list
]);

router.post('/links', [
  authentication.authenticate,
  controller.create
]);

router.get('/links/:link', [
  authentication.authenticate,
  preloading.requiresLink,
  controller.read
]);

router.put('/links/:link', [
  authentication.authenticate,
  preloading.requiresLink,
  controller.update
]);

router.delete('/links/:link', [
  authentication.authenticate,
  preloading.requiresLink,
  controller.delete
]);

module.exports = router;
