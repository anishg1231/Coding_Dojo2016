console.log('users controller');
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Message = mongoose.model('Message')


function UsersController() {
  this.index = function (req,res) {
    User.find({}, function (err, users) {
      if (err) res.json(err)
      else res.json(users)
    })
  }

  this.login = function (req,res) {
    User.findOne({name: req.body.name}, function (err, user) {
      if (err) res.json({status:false, error: 'No user found'})
      else {
        console.log(user);
        if(!user) {
          console.log('made user');
          var user = new User(req.body)
          user.save(function (err) {
            if (err) res.json({status: false, error: err})
            else {
              req.session.loggedIn = true
              req.session.user_id = user._id
              req.session.name = user.name
              res.json({status: true, user: user})
            }
          })
        } else {
          console.log('found user');
          req.session.loggedIn = true
          req.session.user_id = user._id
          req.session.name = user.name
          res.json({status: true, user: user})
        }
      }
    })
  }

  this.session =  function (req, res) {
    if (req.session.loggedIn) {
      console.log('session works');
      res.json({status: true, _id: req.sesion.user_id, name: req.session.name})
    }
    else {
      res.json({status: false})
    }
  }

  this.logout = function (req, res) {
    req.session.destroy(function () {
      res.json({status: true})
    })
  }
  this.create_message = function (req, res) {
    console.log(req.body);
    var message = new Message ({
      message: req.body.message,
      _user: req.session.user_id
    })
    message.save (function (err) {
      if (err) res.json ({ status: false, error: err })
      else {
        User.findOne({ _id: req.session.user_id}, function (err, user) {
          user._messages.push(message._id)
          user.save(function (err) {
            res.json({ status: true })
          })
        })
      }
    })
  }
  this.messages = function (req, res) {
    Message.find({})
            .populate('_user')
            .exec(function (err, messages) {
              if (err) res.json({ status: false, error: err })
              else res.json ({ status: true, messages: messages})
            })
  }
  this.show = function (req, res) {
    console.log(req.params);
    User.findOne({_id: req.params.user_id})
        .populate('_messages')
        .exec(function (err, user) {
          console.log(user);
          if (err) res.json({ status: false, error: err })
          else res.json({ status: true, user: user})
        })
  }
}
module.exports = new UsersController()
