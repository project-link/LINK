'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  type: {
    type: String,
    enum: ['CHAT']
  },
  link: {
    type: Schema.Types.ObjectId,
    ref: 'Link'
  },
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
      delete ret.link_id;
      if (!ret.deleted) delete ret.deleted;

      return ret;
    }
  }
});

CardSchema
  .virtual('link_id')
  .get(function() {
    var o = this.link;
    var populated = !(o instanceof mongoose.mongo.ObjectID);
    return populated ? o.id : o.toString();
  });

CardSchema
  .virtual('deleted')
  .get(function() {
    return !!this.deleted_at;
  });

CardSchema.statics = require('./card.model.statics');

CardSchema.methods = require('./card.model.methods');

module.exports = mongoose.model('Card', CardSchema);
