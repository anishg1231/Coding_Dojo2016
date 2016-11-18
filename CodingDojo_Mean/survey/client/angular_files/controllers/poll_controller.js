;(function () {
  console.log('poll controller')
  'use strict'

  angular
    .module('myApp')
    .controller('PollController', Controller)

  function Controller(PollFactory, $location, $routeParams) {
    if($routeParams.poll_id) {
      PollFactory.show($routeParams.poll_id, function (data) {
        self.polls = data
      })
    }
    const self =  this

    self.getPolls = function () {
      PollFactory.index(function (data) {
        self.polls = data
      })
    }
    self.createPoll = function () {
      console.log('creating poll');
      PollFactory.create(self.newPoll, function (data) {
        console.log('backend data');
        console.log(data);
        self.question = data
      })
    }
    self.votePoll = function () {
      console.log(self.polls);
      PollFactory.update(self.polls, function () {
        $location.url('/poll/show/' + self.poll._id)
      })
    }
  }
})()
// self.vote1 = function(poll_id){
//      console.log('___________________________________')
//      console.log(poll_id)
//      self.show.vote1 += 1;
//      console.log(self.show);
//      pollFactory.vote1(poll_id, self.show, function(returnData){
//        self.poll = returnData
//      })
//      console.log('IN THE VOTE! METHOD')
//    }
//  }
