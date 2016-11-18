const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength:2, maxlength:256},
  _messages: [{ type: mongoose.Schema.ObjectId, ref: 'Message'}]
}, {timstamps:true})

mongoose.model('User', UserSchema)

const MessageSchema = new mongoose.Schema({
  message: { type: String, requied: true, minlength: 2, maxlength: 256},
  _user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {timestamp: true})

mongoose.model('Message', MessageSchema)
