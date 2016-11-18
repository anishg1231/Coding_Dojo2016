console.log('getting server-side routes');
const path = require ('path')
const users = require('../controllers/users.js')

module.export = function (app) {
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/logout', users.logout)
}
