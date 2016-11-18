;(function () {
  console.log('loaded angular');
  'use strict'

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl: 'angular_files/partials/login.html'
    })
    .otherwise({
      redirectTo: '/'
    })
  }
})
