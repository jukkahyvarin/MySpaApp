'use strict';


var app = angular.module('myApp', []);

// enable cross domain calls
app.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

// Declare app level module which depends on filters, and services
app.config(function($routeProvider) {
    $routeProvider
    	.when('/leffat/alue/:areaId',
    	 {
    	 	templateUrl: 'partials/movies.html', controller: 'MoviesCtrl'
    	 })
        .when('/leffat/:areaId/:date',
    	 {
    	     templateUrl: 'partials/movies.html', controller: 'MoviesCtrl'
    	 })
    	 .when('/leffat/:areaId/:movieId/:date',
    	 {
    	     templateUrl: 'partials/movieInfo.html', controller: 'MovieInfoCtrl'
    	 })
    	.otherwise({redirectTo: '/leffat/alue/1014'});
  });
