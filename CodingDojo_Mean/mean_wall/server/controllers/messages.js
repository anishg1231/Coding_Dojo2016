const mongoose = require('mongoose')
const Message = mongoose.model('Message')

module.exports = {
  index: function (req, res) {
    Message.find({})
      .populate('_comments')
      .exec(function (err,messages) {
        if(err)res.json(err)
        else res.render('index', {messages: messages})
      })
  },
  create_message: function (req, res) {
    var message = new Message({
      name: req.body.name,
      message: req.body.message
    })
    message.save(function (err) {
      if (err) res.json(err)
      else res.redirect('/')
    })
  },
