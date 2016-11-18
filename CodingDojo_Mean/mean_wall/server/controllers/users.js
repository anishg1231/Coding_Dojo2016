console.log('usersController');
const mongoose = require('mongoose')
const User = mongoose.model('User')

function usersController() {
  this.index = function (req,res) {
    User.find({}, function (err, users) {
      if (err) res.json (err)
      else{
        res.json(users)
      }
    })
  }
//////////////////////////////////////////
  this.login = function (req,res) {
    User.findOne({username: req.body.username}, function (err,user) {
      if (err) res.json({status:false, error: 'NO USER FOUND'})
      console.log(user);
      if( !user){

      }
    })
  }

}

module.exports = new usersController()
  // body...
};
