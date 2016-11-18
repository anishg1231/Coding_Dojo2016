(function (){
  'use strict'

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider) {
    $routeProvider
    .when('/dragons', {
      templateUrl: 'angular_files/partials/index.html'
    })
    .when('/create', {
      templateUrl: 'angular_files/partials/create.html'
    })
    .when('/dragons/show/:dragon_id', {
      templateUrl: 'angular_files/partials/show.html'
    })
    .when('/dragons/edit/:dragon_id', {
      templateUrl: 'angular_files/partials/edit.html'
    })
    .otherwise({
      redirectTo: '/dragons'
    })
  }
})()
