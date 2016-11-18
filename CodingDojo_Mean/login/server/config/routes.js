console.log('making routes');

const users = require('../controllers/users.js')
console.log(users);
module.exports = function (app) {
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/logout', users.logout)
  app.post('/messages', users.create_message)
  app.get('/messages', users.messages)
  app.get('/show:user_id', users.show)

}
