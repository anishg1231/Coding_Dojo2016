const mongoose = require('mongoose')
var CommentSchema = new mongoose.Schema({
  name: {type: String, require: true, maxlength: 255, minlength: 2},
  comment: {type: String, require: true, minlength: 1},
  _message: {type: mongoose.Schema.ObjectId, ref: 'Message'}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema)
