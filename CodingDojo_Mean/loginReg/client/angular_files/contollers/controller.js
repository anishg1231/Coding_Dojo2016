(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('usersController', Controller)

  function Controller() {
    var self = this
    self.sample = 'Anish'
  }
})()
