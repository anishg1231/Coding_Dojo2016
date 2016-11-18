const app = angular.module('app',['ngRoute', 'ngMessages']);

app.config(function ($routeProvider) {
  $routeProvider
  .when ('/new', {
    templateUrl: 'angular_files/partials/new.html'
  })
  .when ('/edit',{
    templateUrl: 'angular_files/partials/edit.html',
  })
  .when ('/show',{
    templateUrl: 'angular_files/partials/show.html',
  })
  .otherwise ('/new');
});
