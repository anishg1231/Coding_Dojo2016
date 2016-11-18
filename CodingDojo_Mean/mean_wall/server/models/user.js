const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name:{type: String, minlength: 4, maxlength: 255, required: true },
  _message:{type: mongoose.Schema.ObjectId, ref: 'message'},
},{timestamp: true})
mongoose.model('User', userSchema);

const messageSchema = new mongoose.Schema({
  message:{type: String, minlength: 2, maxlength: 255, required: true},
  _user:{type: mongoose.Schema.ObjectId,ref:'User'},
},{timestamp: true});
mongoose.model('Message', messageSchema)

const commentSchema = new mongoose.Schema({
  comment:{type: String, minlength: 2, maxlength: 255, required: true},
  _message:{type: mongoose.Schema.ObjectId, ref: 'Message'},
  _user:{type: mongoose.Schema.ObjectId, ref:'User'},
},{timestamp: true});
mongoose.model('Comment', commentSchema)
