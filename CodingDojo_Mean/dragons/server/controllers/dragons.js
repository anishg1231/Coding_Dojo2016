const mongoose = require('mongoose')
const Dragon = mongoose.model('Dragon')

function DragonController() {
  this.index = function (req,res) {
    console.log('in index');
    Dragon.find({}, function (err,dragons) {
      if (err) res.json(err)
      else res.json(dragons)
    })
  }
  this.create = function (req,res) {
    console.log('in create');
    const dragons = new Dragon(req.body)
    dragons.save(function (err) {
      if (err) res.json(err)
      else res.json(dragons)
    })
  }
  this.update = function (req,res) {
    console.log('in update');
    Dragon.findOne({_id: req.params.dragon_id}, function (err,dragons) {
      if (err) res.jsson(err)
      else{
        dragons.name = req.body.name
        dragons.color = req.body.color
        dragons.element = req.body.element
        dragons.moves = req.body.moves
        dragons.attributes = req.body.attributes
        dragons.save(function (err) {
          if (err) res.json(err)
          else res.json(dragons)
        })
      }
    })
  }
  this.delete = function (req,res) {
    console.log('in destory');
    Dragon.findOne({_id: req.params.dragon_id}, function (err, dragons) {
      if (err) res.json(err)
      else{
        dragons.remove()
        res.json('you slayed the dragon')
      }
    })
  }
  this.show = function (req,res) {
    console.log('in show');
    console.log(req.params);
    Dragon.findOne({_id: req.params.dragon_id}, function (err, dragons) {
      if (err) res.json(err)
      else res.json(dragons)
    })
  }
}


module.exports = new DragonController
