const mongoose = require('mongoose')
const = Comment = mongoose.model('Comment')

create_comment: function (req, res) {
    Message.findOne({_id: req.params.message_id}, function (err, message) {
      if (err) res.json(err)
      else {
        var comment = new Comment({
          name : req.body.name,
          comment:req.body.comment,
          _message: message._id
        })
        comment.save(function (err) {
          if (err) res.json(err)
          else {
            message._comments.push(comment._id)
            message.save(function (err) {
              if (err) res.json(err)
              else res.redirect('/')
            })
          }
        })
      }
    })
  }
