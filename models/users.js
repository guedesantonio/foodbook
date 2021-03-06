/* eslint-disable no-undef */
const mongoose = require('mongoose');

const { Schema } = mongoose;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    default: "Add a description here!"
  },
  recipes: {
    type: Array,
    default: []
  }
});
// eslint-disable-next-line no-multi-assign
module.exports = User = mongoose.model('users', UserSchema);
