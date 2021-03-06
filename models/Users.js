const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {

    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'

        }
    ],
    },
    { 
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false
    }
);

// create User Model using the Schema //
const User = model('User', UserSchema);
  return this.friends.length;
});

  // export the User Model //
module.exports = User;