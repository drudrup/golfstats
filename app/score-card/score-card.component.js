// Register the 'scoreCard' component on the 'scoreCard' module,
angular.
  module('scoreCard').
  component('scoreCard',{
    templateUrl: 'score-card/score-card.tpl.html',
    controller: function ScoreCardController(UserDataService){

        this.golf = UserDataService.getSelectedGolf();
        this.parcours = UserDataService.getSelectedParcours();
        this.tee = UserDataService.getSelectedTee();
        this.index = UserDataService.getIndex();

        this.holes = this.parcours.trous;

        this.parTotal = 0;
        for(var i = 0; i < this.holes.length; i++){
          this.parTotal = (this.parTotal - (-this.holes[i].par));
        }


        // Calcul du nombre de coups rendus
        this.calculCoupsRendus = function(){
          var par = 18/this.holes.length * this.parTotal;
          return Math.round( ((this.index*this.tee.slope)/113 + (this.tee.sss - par)) / (18/this.holes.length) );
        }
        this.coupsRendus = this.calculCoupsRendus();

        // Répartition des coups rendus
        this.holes.sort(function(a,b){
          return parseFloat(a.hcp) - parseFloat(b.hcp);
        });
        for(var i = 0; i < this.holes.length; i++){
          this.holes[i].coupsRendus = 0;
        }
        for(var i = 0; i < this.coupsRendus; i++){
          this.holes[(i)%this.holes.length].coupsRendus++;
        }

        // Calcul du score
        this.scoreStroke = 0;
        this.scoreStbBrut = 0;
        this.scoreStbNet = 0;
        this.calculScore = function(){
          this.scoreStroke = 0;
          this.scoreStbBrut = 0;
          this.scoreStbNet = 0;

          for(var i = 0; i < this.holes.length; i++){
            if(typeof this.holes[i].score != "undefined"){
              this.scoreStroke += this.holes[i].score;

              this.holes[i].scoreStbBrut = ((this.holes[i].score - this.holes[i].par - 2) < 0) ? -(this.holes[i].score - this.holes[i].par - 2) : 0;
              this.scoreStbBrut += this.holes[i].scoreStbBrut;

              this.holes[i].scoreStbNet = ((this.holes[i].score - this.holes[i].coupsRendus - this.holes[i].par - 2) < 0) ? -(this.holes[i].score - this.holes[i].coupsRendus - this.holes[i].par - 2) : 0;
              this.scoreStbNet += this.holes[i].scoreStbNet;
            }
          }
        };

        // Finally, sort holes by num
        this.holes.sort(function(a,b){
          return parseFloat(a.num) - parseFloat(b.num);
        });

    }
  });
