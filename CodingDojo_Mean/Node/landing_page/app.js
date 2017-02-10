var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
  console.log('client request URL:', request.url);

  if (request.url === '/') {
    fs.readFile('views/index.html', 'utf8', function (errors, contents) {
      response.writeHead(200,{'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
      console.log(errors);
    })
  }
  else if(request.url === '/new'){
    fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
      response.writeHead(200,{'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
      console.log(errors);
    })
  }
  else if(request.url === '/ninja'){
    fs.readFile('views/images/Ninja.png', function (errors, contents) {
      response.writeHead(200,{'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
      console.log(errors);
    })
  }
  else {
    response.writeHead(404);
    response.end('File not Found!');
  }
});
server.listen(6789);
console.log('Running in localhost at port 6789');
