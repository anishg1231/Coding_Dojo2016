console.log('friends model');
const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema({
  first_name: {type: String, minlength: 2, maxlength: 256, required: true},
  last_name: {type: String, minlength: 2, maxlength: 256, required: true}
},{timestamp: true})
mongoose.model ('Friend', friendSchema)
