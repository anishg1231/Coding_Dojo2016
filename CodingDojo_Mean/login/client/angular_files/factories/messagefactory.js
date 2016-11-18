;(function () {
  'use strict';

  angular
      .module('myApp')
      .factory('messageFactory', factory)

  function factory($http) {
    var factory = {
    }
    factory.createMessage = function (messageInfo, callback) {
      $http.post('/messages', messageInfo).success(function (data) {
        console.log(data);
        callback()
      })
    }
    factory.getMessages = function (callback) {
      $http.get('/messages').success(function (returnData) {
        callback(returnData)
      })
    }

    factory.getMyMessages = function (user, callback) {
      console.log(user);
      http.get('/show' + user.user_id).success(function (dataFromOurDatabase) {
        callback(dataFromOurDatabase)
      })
    }
    return factory
  }
})()
