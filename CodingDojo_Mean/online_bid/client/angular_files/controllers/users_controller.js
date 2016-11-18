;(function () {
  console.log('loaded angular');
  'use strict';

  angular
  .module('myApp')
  .controller('usersController', Controller)

  function Controller (usersFactory, $location) {
    var self = this
    self.login = function () {
      console.log(self.logUser);
      usersFactory.login(self.logUser,function (returnData) {
        console.log('in callback', returnData);
        if (returnData.status){
          $location.url('/')
        }
        else {
          alert('bad login')
        }
      })
    }
    self.logout = function () {
      usersFactory.logout(function () {
        $location.url('/')
      })
    }
    function getSession() {
      usersFactory.getSession(function (data) {
        console.log(data);
        if (data.status) {
          self.myUser = {}
          self.myUser.name = data.name
          self.myUser.user_id = data._id
          $location.url('/')
        }
        else {
          $location.url('/')
        }
      })
    }
    getSession()
  }
})()
