'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  id: false,
  toJSON: {
    virtuals: true,
    getters: true,
    transform: function(doc, ret) {
      delete ret._id;
      return ret;
    }
  }
});

MemberSchema
  .virtual('id')
  .get(function() {
    var o = this._id;
    var populated = !(o instanceof mongoose.mongo.ObjectID);
    return populated ? o.id : o.toString();
  });

MemberSchema
  .virtual('email')
  .get(function() {
    return this._id.email;
  });

MemberSchema
  .virtual('name')
  .get(function() {
    return this._id.name;
  });

MemberSchema
  .virtual('photo')
  .get(function() {
    return this._id.photo;
  });

MemberSchema
  .virtual('description')
  .get(function() {
    return this._id.description;
  });

MemberSchema
  .virtual('created_at')
  .get(function() {
    return this._id.created_at;
  });

var LinkSchema = new Schema({
  name: String,
  description: String,
  created_at: {
    type: Date,
    default: Date.now,
    index: true
  },
  deleted_at: {
    type: Date,
    index: true
  },
  users: [MemberSchema]
}, {
  toJSON: {
    virtuals: true,
    getters: true,
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret._id;
      if (!ret.deleted) delete ret.deleted;

      return ret;
    }
  }
});

LinkSchema
  .virtual('deleted')
  .get(function() {
    return !!this.deleted_at;
  });

LinkSchema.statics = require('./link.model.statics');

LinkSchema.methods = require('./link.model.methods');

module.exports = mongoose.model('Link', LinkSchema);
