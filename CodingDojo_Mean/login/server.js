//STANDARD EXPRESS SETUP//
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const app = express();
app.use(session({
  secret: 'tacocat',
  resave: false,
  saveUninitialized: true,
}))

//CONFIG
app.use(bodyParser.json({extended: true}));
app.use(express.static(path.join(__dirname, "/client")));
app.use(express.static(path.join(__dirname, "/bower_components")));

//MODELS
require('./server/config/mongoose_setup.js')

//ROUTES
require('./server/config/routes.js')(app)

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
//              bower install angular-messages#X.Y.Z
