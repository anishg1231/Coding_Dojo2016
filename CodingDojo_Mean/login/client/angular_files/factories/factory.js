;(function () {
  'use strict';

  angular
      .module('myApp')
      .factory('usersFactory', factory)

  function factory($http) {
    var factory = {
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
