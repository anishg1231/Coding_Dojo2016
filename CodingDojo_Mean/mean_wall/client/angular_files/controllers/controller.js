;(function () {
  console.log('loaded angular');
  'use strict';

  angular
    .module('myApp')
    .controller('usersController', Controller)

  function functionName() {
    var self = this
    self.sample = 'Anish'
    self.users = {}

    self.login = function () {
      console.log(self.logUser);
      usersFactory.login(self.logUser,function (returnData) {
        console.log('in callback', returnData);

      })
    }

    
  }


})
