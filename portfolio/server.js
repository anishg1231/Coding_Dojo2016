const express     = require('express')
const bodyParser  =  require('body-parser');
const path        = require('path');
const app         = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + "/client")));
app.use(express.static(path.join(__dirname + "/bower_components")))

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
	res.sendfile('index.html');
});
app.post('/send',function(req,res){
	var api_key = 'key-2a5f8078003ac33d6bcb7522da3b61cd';
	var domain = 'sandboxa5ddf3bc08714438a16152a3542c76a1.mailgun.org';
	var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  console.log(req.body)
	var mailOptions = {
		from: 'Mail Gun <postmaster@sandboxa5ddf3bc08714438a16152a3542c76a1.mailgun.org>',
	  to: 'info@anishgheewala.com',
	  subject: req.body.first_name + " " + req.body.last_name + " has sent you a message",
	  html: '<p> You got a new submission with the following details...</p><ul><li>Message: '+req.body.message+'</li><li>Email: '+req.body.email+'</li><li>Phone Number: '+req.body.number+'</li>'
	};
	console.log(mailOptions);

	mailgun.messages().send(mailOptions, function(error, response){
		console.log(response);
		if(error){
			console.log(error);
			res.end("error");
		}else{
			console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
});
app.listen(8000, function () {
  console.log("-------------");
  console.log("-----8000----");
  console.log("-------------");
})
