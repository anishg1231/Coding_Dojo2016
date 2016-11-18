const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength:2, maxlength:256},
}, {timestamp:true})

mongoose.model('User', UserSchema)

const ProductSchema = new mongoose.Schema({
  product: {type: String, required: true, minlength: 2, maxlength: 256},
}, {timestamp: true})

mongoose.model('Product', ProductSchema)

const BidSchema = new mongoose.Schema({
  bid: {type: Number, required: true, min: 0, max: 100},
  _user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  _product: {type: mongoose.Schema.ObjectId, ref: 'Product'},
},{timestamp:true})

mongoose.model('Bid', BidSchema)
