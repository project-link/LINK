'use strict';

var express = require('express');
var controller = require('./user.controller');
var authentication = loquire.components('authentication');
var preloading = loquire.components('preloading');

var router = express.Router();

router.get('/users/', [
  authentication.authenticate,
  controller.list
]);

router.post('/users/', [
  controller.create
]);

router.get('/users/me', [
  authentication.authenticate,
  preloading.requiresUserFromMe,
  controller.read
]);

router.put('/users/me', [
  authentication.authenticate,
  controller.update
]);

router.put('/users/me/password', [
  authentication.authenticate,
  controller.password.update
]);

router.delete('/users/me', [
  authentication.authenticate,
  controller.delete
]);

router.get('/users/:user', [
  authentication.authenticate,
  preloading.requiresUser,
  controller.read
]);

module.exports = router;
