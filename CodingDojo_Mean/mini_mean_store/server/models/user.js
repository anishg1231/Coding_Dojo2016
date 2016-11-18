const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 40 },
}, {timestamp: true})

mongoose.model('User', UserSchema)
