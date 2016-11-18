process.ENV = 8000
const express =  require('express')
const bodyParser =  require('body-parser')
const path = require('path')
const app = express()

/// use is our middleman
app.use(bodyParser.json({ extended: true}))
app.use(express.static(path.join(__dirname + '/client')))
app.use(express.static(path.join(__dirname + ('/bower_components'))))

require('./server/config/mongoose_setup.js')
require('./server/config/routes.js')(app)


app.listen(process.ENV, function () {
  console.log('----------');
  console.log('---' + process.ENV + '---');
  console.log('----------');

})
