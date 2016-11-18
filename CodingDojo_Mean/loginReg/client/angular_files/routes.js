(function () {
  'use strict'

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl: '/angular_files/partials/loginReg.html'
    })
    .otherwise ({
      redirectTo: '/'
    })
  }
})()
