// Register the 'golfCourse' component on the 'golfCourse' module,
angular.
  module('scoreCard').
  component('scoreCard',{
    templateUrl: 'score-card/score-card.tpl.html',
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

        // Initiation de la carte du joueur
        self.players[i].holes = new Array();
        for (var j = 1 ; j <= self.course.holesCount ; j++){
          self.players[i].holes.push({num: (j), par: self.course.tees[0].holes[j].par, hcp: self.course.tees[0].holes[j].hcp, distance: self.course.tees[0].holes[j].distance, score: 0, cr: 0, putts: 0});
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
          /* tri par hcp */
        self.players[i].holes.sort(function(a,b){
          return parseFloat(a.hcp) - parseFloat(b.hcp);
        });
          /* ajout des CR */
        for(var j = 0 ; j < self.players[i].cr ; j++){
          self.players[i].holes[(j)%self.course.holesCount].cr++;
        }
          /* Tri par num pour réordonner les trous */
        self.players[i].holes.sort(function(a,b){
          return parseFloat(a.num) - parseFloat(b.num);
        });


      }

      // Gestion du score
      self.addStroke = function(player){
        player.holes[self.currentHole-1].score++;
        self.calculScore(player);
      }
      self.removeStroke = function(player){
        if(player.holes[self.currentHole-1].score>0) player.holes[self.currentHole-1].score--;
        self.calculScore(player);
      }
      self.calculScore = function(player){
          var pid = player.id;
          self.players[pid].scoreStroke = 0;
          self.players[pid].scoreStbBrut = 0;
          self.players[pid].scoreStbNet = 0;

          for(var j = 0; j < player.holes.length; j++){
            if(self.players[pid].holes[j].score > 0){
              self.players[pid].scoreStroke  += self.players[pid].holes[j].score;
              self.players[pid].scoreStbBrut += ((self.players[pid].holes[j].score - self.players[pid].holes[j].par - 2) < 0) ? -(self.players[pid].holes[j].score - self.players[pid].holes[j].par - 2) : 0;
              self.players[pid].scoreStbNet  += ((self.players[pid].holes[j].score - self.players[pid].holes[j].cr - self.players[pid].holes[j].par - 2) < 0) ? -(self.players[pid].holes[j].score - self.players[pid].holes[j].cr - self.players[pid].holes[j].par - 2) : 0;
            }
          }
        };
      self.calculScores = function(){
        var playerCount = self.players.length;
        for (var i = 0 ; i < playerCount ; i++){
          self.calculScore(self.players[i]);
        }
      }

      // Affichage trou par trou
      self.currentHole = 1;
      self.nextHole = function(){
        if(self.currentHole < self.course.holesCount) self.currentHole++;
        
      }
      self.prevHole = function(){
        if(self.currentHole > 1) self.currentHole--;
      }

      // Toggle Trou par trou/Total
      self.showTotal = false;
      self.toggleTotal = function(){
        self.showTotal = !self.showTotal;
        self.calculScores();
      }
      
    }]
  })
  .directive('slider', function() {
    return {
      restrict: 'A',
        scope: {
            ngModel: '='
        },
      link: function(scope, elem, attrs) {

        //console.log(attrs);
        //console.log(scope.ngModel);

        return $(elem).rangeslider({
              polyfill: false,

              // Callback function
              onInit: function() {},

              // Callback function
              onSlide: function(position, value) {},

              // Callback function
              onSlideEnd: function(position, value) {}
        });
      }
    };
  });

