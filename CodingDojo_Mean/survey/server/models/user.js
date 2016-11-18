const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2, maxlength: 256},
},{timestamp: true})

mongoose.model('User', UserSchema)

const PollSchema = new mongoose.Schema({
  question: {type: String, required: true, minlength: 8, maxlength: 256},
  option1:  {type: String, required: true, minlength: 3, maxlength: 25},
  option2:  {type: String, required: true, minlength: 3, maxlength: 25},
  option3:  {type: String, required: true, minlength: 3, maxlength: 25},
  option4:  {type: String, required: true, minlength: 3, maxlength: 25},
  vote1: {type: String, required: true, min: 0, max: 1000},
  vote2: {type: String, required: true, min: 0, max: 1000},
  vote3: {type: String, required: true, min: 0, max: 1000},
  vote4: {type: String, required: true, min: 0, max: 1000},
  _user: { type: mongoose.Schema.ObjectId, ref: 'User' }
},{timestamp: true})

mongoose.model('Poll', PollSchema)
