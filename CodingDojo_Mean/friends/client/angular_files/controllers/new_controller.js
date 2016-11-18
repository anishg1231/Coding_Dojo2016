
    angular
      .module('app')
      .controller('newController', Controller)
      .controller('editController', Controller1)

    function Controller(friendsFactory) {
      console.log('loaded newController');
      var self = this
      self.create = function () {
        console.log(self);
        friendsFactory.friend(self.newFriend)
        console.log('hello');
        console.log(self.newFriend)
      }
    }
    function Controller1(friendsFactory) {
      console.log('loaded editController');
      var self = this
      self.update = function () {
        friendsFactory.update(self.newFriend)
      }
    }






    // var friend = {}
    // var friend = (self.newFriend.f_name)
    // var friend = (self.newFriend.l_name)
// const app = angular.module('app')
//
// app.controller('newController', [
//   '$scope',
//   function($scope){
//     console.log('newController loaded');
//     var self = this;
//     self.newFriend = {};
//     //this line is optional because angular will be smart enough to know you have a NC.newFriend object from your ng-model
//     self.create = function () {
//       console.log('create friend clicked!');
//       //define create function so that if someone clicks on an element with ng-click = 'NC.create() it triggers the function and runs the code inside'
//       if (!self.newFriend.name || !self.newFriend.favoriteLanuage) {
//         console.log('required fields not present');
//         return;
//       }
//     }
//   }// close the function being passed into the controller
// ] // close array of injected services + controller function
// ); // end the controller function invocations: ()
