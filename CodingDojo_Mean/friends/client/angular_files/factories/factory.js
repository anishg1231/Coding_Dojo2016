angular
  .module('app')
  .factory('friendsFactory', factory)

   function factory ($http) {
     var factory = {}
     var friends = []
     factory.friend = function (newFriend) {
       console.log(newFriend);
       $http.post('/friends',newFriend).success(function () {
         console.log('got info back');
       })
     }
     factory.update = function (newFriend) {
       $http.put('/friends/:id',newFriend).success(function () {
         console.log('updated');
       })
     }
     return factory
   }
  
