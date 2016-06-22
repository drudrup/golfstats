'use strict';

angular.module('golfStats.golfCard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/carte', {
    templateUrl: 'golf-card/golf-card.template.html',
    controller: 'GolfCardCtrl'
  });
}])

.controller('GolfCardCtrl', [function($scope) {
  $scope.score = 36;
}]);
