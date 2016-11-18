;(function () {
  console.log('loaded angular');
  'use strict';

  angular
      .module('myApp')
      .controller('usersController', Controller)

  function Controller (usersFactory, $location) {
    var self = this
    self.sample = 'kris'
    self.register = function () {
      console.log(self.users);
      usersFactory.register(self.users,function (){
        self.users = {}
      })
    }
    self.login = function () {
      console.log(self.logUser);
      usersFactory.login(self.logUser,function (returnData) {
        console.log('in callback', returnData);
        if (returnData.status){
          $location.url('/success')
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
            self.myUser.first_name = data.first_name
            self.myUser.user_id = data._id
            $location.url('/success')
          }
          else {
            $location.url('/')
          }
        })
      }
      // getSession()
    }
})()
