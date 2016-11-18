console.log('users controllers');
const mongoose = require('mongoose')
const User = mongoose.model('User')
// console.log(User);

function UsersController() {
  this.index = function (req, res) {
    //find all users and return them
    User.find({} , function (err, users) {
      if (err) res.json(err)
      else res.json(users)
    })
  }
  this.login = function (req, res) {

  }
  this.register = function (req,res) {

  }
}
module.exports = new UsersController()
