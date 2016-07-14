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

      // Calcul handicap et distribution des CR pour chaque joueur
      for (var i = 0 ; i < self.players.length ; i++){

        // Get SSS, Slope & Par for the current player
        for(var j = 0 ; j < self.course.tees.length ; j++){

          if(self.course.tees[j].color == self.players[i].tee){

            if(self.players[i].sexe == "man"){
              self.players[i].slope = self.course.tees[j].menSlope;
              self.players[i].sss = self.course.tees[j].menSSS;
            }else{
              self.players[i].slope = self.course.tees[j].womenSlope;
              self.players[i].sss = self.course.tees[j].womenSSS;
            }

          }
        }

        // Calcul des coups rendus : (Index x Slope)/113 + (SSS-Par)
        var index = self.players[i].index;
        var slope = self.players[i].slope;
        var sss = self.players[i].sss.replace(",",".");
        var par = self.course.par;

        if(index>36){
          //var coupsRendus = (36*slope)/113 + (sss-par) + (index-36) - (18-self.course.holesCount);
          var coupsRendus = (36*slope)/113 + (sss-par) + (index-36);
          if(self.course.holesCount == 9) coupsRendus = coupsRendus-9;

        }else{
          var coupsRendus = (index*slope)/113 + (sss-par);
        }
        self.players[i].cr = Math.round( coupsRendus );

        // répartition des CR
        /*for(var j = 0 ; j < self.course.tees.length ; j++){

        }*/

        //console.log(self.course.holesCount);
        console.log("index"+index);
        console.log("slope"+slope);
        console.log("sss"+sss);
        console.log("par"+par);

      }

    }]
  });

