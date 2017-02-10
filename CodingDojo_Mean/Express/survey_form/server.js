////MODULES///////
var express = require('express')
var bodyParser = require('body-parser')
////CONFIG////////
var app = express()

//SETTING UP OUR STATIC FOLDER TO BE GIVEN TO THE BROWSER
app.use(express.static(__dirname + '/static'))

// LOCATE OUR VIEWS FOLDER TO HELP OUR SEVER FIND OUR VIEWS
app.set('views', __dirname + '/views')

//OUR TEMPLATING ENGINE IS EJS,OUR SEVER SHOULD READ EJS FILES
app.set('view engine', 'ejs')

//UNENCODE OUR URL TO EXTRACT THE FORM INFORMATION WE require
app.use(bodyParser.urlencoded({extended:true}))

//////ROUTES//////////
//PROCESS A / REQUEST AND LOAD THE INDEX FILE
app.get('/', function(req,res){
  res.render('index')
})
app.post('/results', function (req,res) {
  var result = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render('results', result)
  console.log(req.body.location);

})
app.post('/', function (req,res) {
  res.render('index')
})

////LAUNCHING SERVER/////
app.listen(8000,function () {
  console.log('____________________');
  console.log('-------8000----------');
  console.log('----------------------');
})
