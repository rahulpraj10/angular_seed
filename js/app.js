// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic','ngMaterial'])

.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
   
 .state('login', {
   url: "/login",
   templateUrl: "templates/login.html",
   controller: 'LoginCtrl'
  });
 // If none of the above states are matched, use this as the fallback:
$urlRouterProvider.otherwise('login');
});

