const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema (
    {
        // custom id for Reactions //
        reactionId: {
            type: Schema.types.objectId,
            default: () => new types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxLength: 200,
        },
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 200
        },
        createdAt: {
            type: date,
            default: date.now,
            get: (createdAtVal) => moment(createdAt).format('MMM DD, YYYY [at]')
        },
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
    
)

const Thought = model('Thought', ThoughtSchema);

// total count of friends //
  ThoughtSchema.virtual('reactionCount').get(function() {
      return this.reactions.length;
  });

  module.exports = Thought;