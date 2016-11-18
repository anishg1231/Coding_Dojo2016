console.log('friends controller')
const mongoose = require ('mongoose')
const Friend = mongoose.model('Friend')

function FriendsController(){
  this.index = function (req,res) {
    console.log('luis');
    Friend.find({}, function (err,results) {
      res.json(results);
    })
  };

  this.create = function (req,res) {
    console.log(req.body);
    var friend = new Friend(req.body)
    friend.save(function (err) {
      if (err) {
        console.log(err);
      }else{
        res.json('yay')
      }
    })
  };

  this.update = function (req,res) {
    Friend.findOne({_id: req.params.id}, function (err, friend) {
      if (err) {
        console.log('Cant find friend');
      }else {
        Friend.f_name = req.body.f_name
        Friend.l_name = req.body.l_name
        Friend.save(function (err, updatedFriend) {
          if (err) {
            console.log(err);
          }else {
            res.json(updatedFriend)
          }
        })
      }
    })
  };
  this.delete = function (req,res) {
    Friend.remove(function (err) {
      if (err) {
        console.log(err);
      }else {
        res.json ({message: 'friend removed'})
      }
    })
  };
  this.show = function (req,res) {
    Friend.FindOne({_id: req.params.id}, function (err, result) {
      res.json(result)
    })
  };
}
module.exports = new FriendsController();
