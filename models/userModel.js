const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'user must have a name'],
      trim: true,
      minlength: [2, 'user name must be at least 2 characters'],
      maxlength: [80, 'user name must be less than 80 characters'],
    },

    password: {
      type: String,
      required: [true, 'user must have a password'],
      minlength: [8, 'password must be at least 8 characters'],
      select: false,
    },

    passwordConfirm: {
      type: String,
      required: [true, 'please confirm your password'],
    },

    photo: String,

    email: {
      type: String,
      required: [true, 'user must have an email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
      trim: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
