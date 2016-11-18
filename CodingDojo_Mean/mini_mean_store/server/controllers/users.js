console.log('server-side users controller');
const mongoose = require('mongoose')
const User = mongoose.model ('User')

function UsersController() {
  this.index = function (req,res) {
    User.find({}, function (err,users) {
      if (err) {
        console.log(err);
        res.json(err)
      }
      else {
        res.json(users)
        console.log(users);
      }
    })
  }
  this.login = function (req,res) {
    User.findOne({name: req.body.name}, function (err,user) {
      if (err) {
        res.json({status:false, error: 'No User Found'})
      }
      else {
        if (!user) {
          var user = new User(req.body)
          user.save (function (err) {
            if (err) {
              res.json({status: false, error: err})
            }
            else {
              req.session.loggedIn = true
              req.session.user_id = user._id
              req.session.name = user.name
              res.json({status: true, user: user})
            }
          })
        }
        else {
          req.session.loggedIn = true
          req.session.user_id = user._id
          req.session.name = user.name
          res.json({status: true, user: user})
        }
      }
    })
  }
  this.session = function (req,res) {
    if (req.session.loggedIn) {
      console.log('session works');
      res.json({status: true, _id: req.session.user_id, name: req.session.name})
    }
    else {
      res.json ({status: false})
    }
  }
  this.logout = function (req, res) {
    req.session.destroy(function () {
      res.json({status:true})
    })
  }
}
module.exports = new UsersController()
