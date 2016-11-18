console.log('factory');
(function () {
  'use strict'
  angular
    .module('myApp')
    .factory('DragonFactory', factory)

  function factory($http) {
    console.log('a');
    const factory = {}
    factory.index = function (callback) {
      $http.get('/dragons').success(function (dragons) {
        callback(dragons)
      })
    }
    factory.create = function (dragonInfo, callback) {
      console.log('in factory');
      $http.post('/dragons', dragonInfo).success(function (data) {
        console.log('in success');
        callback()
      })
    }
    factory.show = function (dragonId,callback) {
      $http.get('/dragons/show/'+dragonId).success(function (dragons) {
        callback(dragons)
      })
    }
    factory.update = function (dragonInfo, callback) {
      $http.put('/dragons/update/' + dragonInfo._id, dragonInfo).success(function (data) {
        console.log('blah', data)
        callback()
      })
    }
    factory.delete = function (dragonId,callback) {
      $http.delete('/dragons/' + dragonId).success(function (data) {
        callback()
      })
    }
    return factory
  }
})()
