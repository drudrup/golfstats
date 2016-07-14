// Register the 'golfCourse' component on the 'golfCourse' module,
angular.
  module('scoreCard').
  component('scoreCard',{
    templateUrl: 'modules/score-card/score-card.tpl.html',
    controller: ['PlayersService', 'GolfCourseService', function GolfCourseController(PlayersService, GolfCourseService){
      var self = this;

      self.players = PlayersService.getPlayers();
      self.golf = GolfCourseService.getGolf();
      self.course = GolfCourseService.getCourse();

    }]
  });

