var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/static'))

app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/results', function (req, res) {
  var result = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render('results', result)
  // console.log(req.body.location);
})

app.post('/', function (req, res) {
  res.render('index')
})

//storing our app.listen within a variable called server
var server = app.listen(8000, function () {
  console.log("--------------");
  console.log("----8000------");
  console.log("--------------");
})

//this creates the io variable which we are going to use to control our sockets
//passing the server variable
var io = require("socket.io").listen(server)

//we are going to set up the connection event.
io.sockets.on('connection', function (socket) {
  //all the socket code goes here
  socket.on('posting_form', function (data) {
    console.log(socket.id);
    console.log(data);
    var random_number = Math.floor((Math.random() * 1000) +1);
    socket.emit("updated_message", {response: data});
    socket.emit("random_number", {response: random_number});
  })
})
