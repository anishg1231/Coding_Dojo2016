//get the http module
var http = require('http');
//fs module allows us to read and write content for responses
var fs = require('fs');
//creating a sever using http module:
var server = http.createServer(function (request, response) {
  //see what URL the are requesting
  console.log('client request URL: ', request.url);
  //this is how we do routing:
  if(request.url === '/'){
    fs.readFile('views/index.html', 'utf8', function(errors,contents){
      response.writeHead(200,{'Content-Type': 'text/html'}); //send data about response
      response.write(contents); // send response body
      response.end(); //finished!
      console.log(errors);
    })
  }
  else if(request.url === '/car1'){
    fs.readFile('views/images/car1.png', function(errors, contents){
      console.log(errors);
      console.log(contents);
      response.writeHead(200, {'Content-type': 'image/png'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/car2'){
    fs.readFile('views/images/car2.jpg', function(errors, contents){
      console.log(errors);
      console.log(contents);
      response.writeHead(200, {'Content-type': 'image/png'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/cat1'){
    fs.readFile('views/images/cat1.jpg', function(errors, contents){
      console.log(errors);
      console.log(contents);
      response.writeHead(200, {'Content-type': 'image/png'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/cat2'){
    fs.readFile('views/images/cat2.jpg', function(errors, contents){
      console.log(errors);
      console.log(contents);
      response.writeHead(200, {'Content-type': 'image/png'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/new'){
    fs.readFile('views/new.html', 'utf8', function(errors,contents){
      response.writeHead(200,{'Content-Type': 'text/html'}); //send data about response
      response.write(contents); // send response body
      response.end(); //finished!
      console.log(errors);
    })
  }
    //request didn't match anything
  else{
      response.writeHead(404);
      response.end('File not Found!!')
  }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log('Running in localhost at port 6789');
