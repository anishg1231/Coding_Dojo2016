;(function () {
  'use strict';

  angular
      .module('myApp')
      .factory('usersFactory', factory)

  function factory($http) {
    var factory = {
    }
    factory.register = function (userInfo, callback){
      console.log(userInfo, callback);
      $http.post('/register', userInfo).success (function (returnData) {
        if (returnData.status){
          alert('good reg')
          callback()
        } else{
          alert('bad reg');
        }
      })
    }
    factory.login = function(userInfo, callback){
      $http.post('/login', userInfo).success(function (returnData) {
        console.log(returnData);
        callback(returnData)
      })
    }
    factory.getSession = function (callback) {
      $http.get('/session').success(function (returnData) {
        callback(returnData)
      })
      factory.logout = function (callback) {
        $http.post('/logout').success(function (data) {
          callback()
        })
      }
    }
    return factory
  }
})()
