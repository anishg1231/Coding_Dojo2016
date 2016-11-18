const mongoose = require('mongoose')

const DragonSchema = new mongoose.Schema({
  name: {type: String, minlength: 2, maxlength: 40, required:true},
  color: {type: String, minlength: 2, maxlength: 40, required:true},
  element: {type: String, minlength: 2, maxlength: 40, required:true},
  moves: {type: String, minlength: 2, maxlength: 40, required:true},
  attributes: {
    strength: {type: Number, min:0, max: 25, required: true, default: 1},
    speed: {type: Number, min:0, max: 25, required: true, default: 1},
    stamina: {type: Number, min:0, max: 25, required: true, default: 1},
    wisdom: {type: Number, min:0, max: 25, required: true, default: 1},
  }
},{ timestamp: true })

mongoose.model('Dragon', DragonSchema)
