console.log('getting routes');
const path = require ('path');
const users = require('../controllers/users.js')
const polls = require('../controllers/polls.js')

module.exports = function (app) {
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/logout', users.logout)
  app.get('/polls', polls.index)
  app.get('/polls/show/:poll_id', polls.show)
  app.put('/polls/update/:poll_id', polls.update)
  app.post('/polls', polls.create)
  app.delete('/polls/:poll_id', polls.delete)
}
