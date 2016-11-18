console.log('factory');
(function () {
  'use strict'
  angular
    .module('myApp')
    .factory('PollFactory', factory)

  function factory($http) {
    console.log('factory');
    const factory = {}

    factory.index = function (callback) {
      $http.get('/polls').success(function (polls) {
        callback(polls)
      })
    }
    factory.create = function (pollInfo, callback) {
      console.log('in factory');
      $http.post('/polls', pollInfo).success(function (data) {
        console.log(data);
        callback(data)
      })
    }
    factory.show = function (pollId,callback) {
      $http.get('/polls/show/'+pollId).success(function (polls) {
        callback(polls)
      })
    }
    factory.update = function (pollInfo, callback) {
      $http.put('/polls/update/' + pollInfo._id, pollInfo).success(function (data) {
        console.log('blah', data)
        callback()
      })
    }
    return factory
  }
})()

// factory.vote1 = function(poll_id, pollInfo, callback){
//      console.log('made it to vote 1 factory method')
//      $http.post('/vote/'+ poll_id, pollInfo).success(function(vote){
//        console.log(vote)
//        callback(vote)
//      })
//    }
