//STANDARD EXPRESS SETUP//
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
path = require('path');

app = express();

//CONFIG
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.json());
app.set(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));

//MODELS
require('./server/config/mongoose_setup.js')

//ROUTES
require('./server/config/routes.js')(app)

//FRIENDS controller
// var FriendsController = require('./controllers/friends.js')

// // tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})


// make a package.json file:
// yourcommandline> npm init -y
// yourcommandline> npm install express --save
// yourcommandline> npm install ejs --save
// yourcommandline> npm install body-parser --save
// yourcommandline> npm install mongoose --save
// bower install angular-messages
