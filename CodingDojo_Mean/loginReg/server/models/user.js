const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  first_name: {type: String, require: true, minlength: 2, maxlength: 256},
  last_name: {type: String, require: true, minlength: 2, maxlength: 256},
  email: {type: String, require: true, minlength: 2, maxlength: 256},
  pw_hash: {type: String, require: true, minlength: 2, maxlength: 256},
}, {timestamp: true})

mongoose.model('User', userSchema)
console.log('made schema');
