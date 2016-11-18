const messages = require('../controllers/messages.js')
module.exports = function (app) {
  //ROUTES
  app.get('/', function (req, res) {
    messages.index(req, res)
  })
  app.post('/messages', function (req, res) {
    messages.create_message(req, res)
  })
  app.post('/comments/:message_id', function (req, res) {
    messages.create_comment(req, res)
  })
}
