angular.
  module('golfStats').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          //template: '<h1 class="text-center">Golf Scorer</h1><golf-course></golf-course>'
          //template: '<h1 class="text-center">Golf Scorer</h1><players-creation></players-creation>'
          template: '<div class="text-center"><h1>Golf Scorer</h1><a href="/#!/golf" class="btn btn-success">Start</a></div>'
        }).
        when('/golf', {
          template: '<golf-course></golf-course>'
        }).
        when('/players', {
          template: '<players-creation></players-creation>'
        }).
        when('/scorecard', {
          template: '<score-card></score-card>'
        }).
        /*when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).*/
        otherwise('/');
    }
  ]);
