console.log('getting routes');
const path = require ('path');
const dragons = require('../controllers/dragons.js')

module.exports = function (app) {
  app.get('/dragons', dragons.index)
  app.get('/dragons/show/:dragon_id', dragons.show)
  app.put('/dragons/update/:dragon_id', dragons.update)
  app.post('/dragons', dragons.create)
  app.delete('/dragons/:dragon_id', dragons.delete)

}
