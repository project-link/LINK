'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    index: { unique: true },
    lowercase: true
  },
  salt: String,
  hashed_password: String,
  name: String,
  description: String,
  photo: String,
  created_at: {
    type: Date,
    default: Date.now,
    index: true
  },
  deleted_at: {
    type: Date,
    index: true
  },
  provider: String,
  facebook: {},
  twitter: {},
  google: {},
  github: {}
}, {
  toJSON: {
    virtuals: true,
    getters: true,
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret._id;
      delete ret.password;
      delete ret.salt;
      delete ret.hashed_password;
      delete ret.provider;
      delete ret.facebook;
      delete ret.twitter;
      delete ret.google;
      delete ret.github;
      if (!ret.deleted) delete ret.deleted;

      return ret;
    }
  }
});

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  });

UserSchema
  .virtual('has_photo')
  .get(function() {
    return !!this.photo;
  });

UserSchema
  .virtual('deleted')
  .get(function() {
    return !!this.deleted_at;
  });

UserSchema.statics = require('./user.model.statics');

UserSchema.methods = require('./user.model.methods');

module.exports = mongoose.model('User', UserSchema);
