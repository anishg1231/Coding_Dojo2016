console.log('making routes');

const users = require('../controllers/users.js')
console.log(users);
module.exports = function (app) {
  //login
  app.get('/users', users.index)
  app.post('/login', users.login)
  app.get('/session', users.session)
  app.post('/logout', users.logout)

  //Product biding
  // app.get('products', Product.index)

}
