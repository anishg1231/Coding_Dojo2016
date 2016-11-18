;(function () {
  'use strict';

  angular
    .module('myApp')
    .factory('usersFactory', factory)

  function factory($http) {
    var factory = {

    }
    factory.login = function (userInfo, callback) {
      console.log(userInfo, callback);
      $http.post('/login',userInfo).success(function (returndata) {
        console.log(returndata);
        callback(returndata)
      })
    }
    return factory
  }
})()
