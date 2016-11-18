const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  first_name: {type: String, required:true, minlength:2, maxlength:256},
  last_name: {type: String, required:true, minlength:2, maxlength:256},
  email: {type: String, required:true, minlength:2, maxlength:256},
  pw_hash: {type: String, required:true, minlength:2, maxlength:256},
}, {timstamps:true})

UserSchema.methods.encryptUser = function (password, callback) {
  console.log('here', password, callback);
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    console.log('yellow');
    if (err) console.log(err);
    else {
      console.log('there?');
      bcrypt.hash(password, salt,function (err, hash) {
        if (err) console.log(err);
        else {
          user.pw_hash = hash
          callback()
        }
      })
    }
  });
}
UserSchema.methods.comparePasswords = function(password,callback){
  var user = this
  bcrypt.compare(password, user.pw_hash, function (err, results) {
    callback(result)
  })
}
UserSchema.pre('save', function (done) {
  console.log('in pre', this);
  done()
})

mongoose.model('User', UserSchema)
