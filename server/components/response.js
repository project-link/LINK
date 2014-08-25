'use strict';

var http = require('http'),
    res = http.ServerResponse.prototype;

res.setToken = function(token) {
  this.setHeader('Auth-Token', token);
  this.token = token;
};

res.finish = function(data) {
  data = data || {};
  if (this.token) data.token = this.token;
  this.json(data);
};
