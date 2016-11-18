//This file is complete other than changing our DB

var mongoose = require('mongoose'),
fs = require('fs'),
path = require('path'),
// dir where our models are located
models_path = path.join(__dirname, '../models'),
//Regular expression that checks for .js extension
reg = new RegExp('.js$', "i"),
//datebase info
dbURI = 'mongodb://localhost/friendsdb';
//connect to datebase
mongoose.connect(dbURI);

////connection events////

//when successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connnection open to ${dbURI}');
});
//if connection throws an error
mongoose.connection.on('error', function (err) {
  console.error('Mongoose default connnection error: ${err}');
});
//when connection disconnects
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connnection disconnected');
});

////if Node process ends, close the mongoose connection////
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

//read all of the files in the models dir and
//check if it is a javascript file before requiring it

fs.readdirSync(models_path).forEach(function (file) {
  if (reg.test(file)) {
    require(path.join(models_path,file ));
  }
});




















// var mongoose = require('mongoose');
// // require the fs module for loading model files
// var fs = require('fs');
// // require path for getting the models path
// var path = require('path');
// // connect to mongoose!
// mongoose.connect('mongodb://localhost/file_structure_and_server');
// // create a variable that points to the path where all of the models live
// var models_path = path.join(__dirname, './../models');
// // read all of the files in the models_path and require (run) each of the javascript files
// fs.readdirSync(models_path).forEach(function(file) {
//   if(file.indexOf('.js') >= 0) {
//     // require the file (this runs the model file which registers the schema)
//     require(models_path + '/' + file);
//   }
// });
