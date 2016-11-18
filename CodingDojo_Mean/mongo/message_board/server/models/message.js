const mongoose = require('mongoose')
var MessageSchema = new mongoose.Schema({
  name: {type: String, require: true, maxlength: 255, minlength: 2},
  message: {type: String, require: true, minlength: 1},
  _comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}]
}, { timestamps: true})

mongoose.model('Message', MessageSchema)
