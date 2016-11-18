console.log('making routes');

const users = require('../controllers/users')
console.log(users);
module.exports = function (app) {
  app.get('/index', users.index)
}
