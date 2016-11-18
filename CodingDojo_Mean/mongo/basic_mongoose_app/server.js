//require the express module
var express = require('express')
//create an express app
var app = express();
//require body-parser to receive post data from clients
var bodyParser = require('body-parser');
//integrate body parser with our app
app.use(bodyParser.urlencoded({ extended: true}));
//require path
var path = require('path');
//setting our static folder directory
app.use(express.static(path.join(__dirname, './static')));
//setting our view engine set to ejs
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose')
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema); // we are setting this Schema in our Models as 'Users'
var User = mongoose.model('User') // we are retrieving this Schema from our Models, nameed 'User'
//Root Request
//Routes
app.get('/', function (req,res) {
  User.find({}, function (err, users) {    
  })
  //this is where we will retreve the users from the datebase and include them in the view page we will be rendering
  res.render('index');
})
//Add user Request
app.post('/users', function (req, res) {
  console.log("POST DATA", req.body);
  //this is where we would add the user from req.body to the database.
  var user = new User ({
    name: req.body.name,
    age: req.body.age
  }); // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation
  user.save(function (err) {
    if (err) { // if there is an error log that something went wrong
      console.log('something went wrong');
    }
    else { // else log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})
//setting our server to listen on port 8000
app.listen(8000, function () {
  console.log("listening on port 8000");
})


// There is a lot that is happening in the code above, make sure that you understand everything that is going on. A few key points:

// notice that "User" is actually an object constructor (notice the "new" keyword). The "User", which constructs user objects, have methods that talk to the database!

// ".save" is the method that actually inserts into the database.

// ".save" takes a callback function that has an error parameter so that we know whether or not the insert was successful (these callback functions really do come up everywhere in JS huh?). This is a pattern that you'll see often -- any method that interacts with the database will typically have a callback function as a parameter (the callback function will run when the database operation finishes).
