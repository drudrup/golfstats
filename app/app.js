'use strict';

// Declare app level module which depends on views, and components
angular.module('golfStats', [])
      .controller('GolfCardCtrl', function GolfCardCtrl($scope){
        
        $scope.holes = [
          {
            num: 1,
            par: 3,
            score: ""
          },
          {
            num: 2,
            par: 5,
            score: ""
          },
          {
            num: 3,
            par: 4,
            score: ""
          },
          {
            num: 4,
            par: 5,
            score: ""
          },
          {
            num: 5,
            par: 4,
            score: ""
          },
          {
            num: 6,
            par: 4,
            score: ""
          },
          {
            num: 7,
            par: 4,
            score: ""
          },
          {
            num: 8,
            par: 4,
            score: ""
          },
          {
            num: 9,
            par: 3,
            score: ""
          },
        ];
        
        $scope.score = 0;
        
        $scope.total = function(){
          $scope.score = 0;
          for(var i = 0; i < $scope.holes.length; i++){
            if($scope.holes[i].score != "") $scope.score += $scope.holes[i].score;
          }
        };
        
      });
