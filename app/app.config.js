angular.
  module('golfStats').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          //template: '<h1 class="text-center">Golf Scorer</h1><golf-course></golf-course>'
          template: '<h1 class="text-center">Golf Scorer</h1><players-creation></players-creation>'
        }).
        when('/card', {
          template: '<score-card></score-card>'
        }).
        /*when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).*/
        otherwise('/');
    }
  ]);
