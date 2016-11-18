console.log('polls controller');
const mongoose = require('mongoose')
const Poll = mongoose.model('Poll')

function PollsController() {
  this.index = function (req, res) {
    console.log('in index');
    Poll.find({})
    .populate('_user')
    .exec(function (err, polls) {
      if (err) res.json(err)
      else res.json(polls)
    })
  }
  this.create = function (req, res) {
    console.log('in create');
    console.log(req.body.question);
    const polls = new Poll({
      question: req.body.question,
      option1 : req.body.option1,
      option2 : req.body.option2,
      option3 : req.body.option3,
      option4 : req.body.option4,
      _user : req.session.user_id
    })
    console.log(polls.question);
      polls.save(function (err) {
        if (err) res.json(err)
        else res.json(polls)
      })
  }
  this.delete = function (req, res) {
    console.log('in delete');
    Polls.findOne({_id: req.params.poll_id}, function (err, polls) {
      if (err) res.json(err)
      else{
        polls.remove()
        res.json('you removed a poll')
      }
    })
  }
  this.update = function (req,res) {
    console.log('in update');
    console.log(req.body.vote1);
    Poll.findOne({_id: req.params.poll_id}, function (err,polls) {
      question: req.body.question,
      vote1 : req.body.vote1,
      vote2 : req.body.vote2,
      vote3 : req.body.vote3,
      vote4 : req.body.vote4,
      _user : req.session.user_id
    })
    polls.save(function (err) {
      if (err) res.json(err)
      else res.json(polls)
    })
  }
  
  this.show = function (req, res) {
    console.log('in show');
    Poll.findOne({_id: req.params.vote_id}, function (err, polls) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        polls = poll + req.params
        poll.vote1 = poll
       console.log('OMGOMGOMGOMGOMGOMGOMGOGMOGMOGMOGMGOMGOMGOGMGO')
       console.log(poll.vote1)
       res.json(poll.vote1)
      }
    })
  }
}
module.exports = new PollsController()

// this.vote = function(req,res){
//    console.log('MADE IT TO THE VOTE')
//    console.log(req.params)
//    console.log('_______________')
//    console.log(req.body.vote1)
//    Poll.findOne({ _id: req.params.vote_id}, function(err,poll){
//      console.log('++++++++++++++++++++++++++=')
//      if(err){
//        console.log(err)
//        res.json(err)
//      } else {
//          poll = poll + req.params
//          poll.vote1 = poll
//          console.log('OMGOMGOMGOMGOMGOMGOMGOGMOGMOGMOGMGOMGOMGOGMGO')
//          console.log(poll.vote1)
//          res.json(poll.vote1)
//      }
//    })
//  }
