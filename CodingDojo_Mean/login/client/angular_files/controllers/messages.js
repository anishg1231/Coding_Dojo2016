(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('messagesController', Controller);

    function Controller(messageFactory) {
      var self = this
      self.createMessage = function () {
        console.log(self.message);
        messageFactory.createMessage(self.message, function () {
          console.log('in callback');
        })
      }
      self.messages = []
      function getMessages() {
        messageFactory.getMessages(function (data) {
          self.messages = data
        })
      }
      getMessages()
      self.myMessages = function (user) {
        messageFactory.getMyMessages(user, function (returnedMessages) {
          self.ourMessages = returnedMessages
        })
        console.log(user);
      }
    }
})()
