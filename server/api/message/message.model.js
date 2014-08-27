'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  card: {
    type: Schema.Types.ObjectId,
    ref: 'Card'
  },
  text: String,
  photo: String,
  created_at: {
    type: Date,
    default: Date.now,
    index: true
  },
  deleted_at: {
    type: Date,
    index: true
  }
}, {
  toJSON: {
    virtuals: true,
    getters: true,
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret._id;
      delete ret.from_id;
      delete ret.card_id;
      if (!ret.deleted) delete ret.deleted;

      return ret;
    }
  }
});

MessageSchema
  .virtual('from_id')
  .get(function() {
    var o = this.from;
    var populated = !(o instanceof mongoose.mongo.ObjectID);
    return populated ? o.id : o.toString();
  });

MessageSchema
  .virtual('card_id')
  .get(function() {
    var o = this.card;
    var populated = !(o instanceof mongoose.mongo.ObjectID);
    return populated ? o.id : o.toString();
  });

MessageSchema
  .virtual('deleted')
  .get(function() {
    return !!this.deleted_at;
  });

MessageSchema.statics = require('./message.model.statics');

MessageSchema.methods = require('./message.model.methods');

module.exports = mongoose.model('Message', MessageSchema);
