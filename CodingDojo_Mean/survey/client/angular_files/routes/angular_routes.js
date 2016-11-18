;(function () {
  console.log('loaded angular');
  'use strict';

  angular
      .module('myApp')
      .config(config)

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'angular_files/partials/login.html'
    })
    .when('/polls', {
      templateUrl: 'angular_files/partials/index.html'
    })
    .when('/create', {
      templateUrl: 'angular_files/partials/create.html'
    })
    .when('/polls/show/:poll_id', {
      templateUrl: 'angular_files/partials/index.html'
    })
    .when('/polls/update/:poll_id',{
      templateUrl: 'angular_files/partials/show.html'
    })
    .otherwise({
      redirectTo: '/'
    })
  }
})()
