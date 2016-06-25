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

        this.score = 0;

        this.total = function(){
          this.score = 0;
          for(var i = 0; i < this.holes.length; i++){
            if(typeof this.holes[i].score != "undefined") this.score += this.holes[i].score;
          }
        };

        // Calcul du nombre de coups rendus
        this.coupsRendus = function(){
          var par = 18/this.holes.length * this.parTotal;
          return Math.round( ((this.index*this.tee.slope)/113 + (this.tee.sss - par)) / (18/this.holes.length) );
        }

        // Répartition des coups rendus
        this.holes.sort(function(a,b){
          return parseFloat(a.hcp) - parseFloat(b.hcp);
        });
        for(var i = 0; i < this.holes.length; i++){
          this.holes[i].coupsRendus = 0;
        }
        for(var i = 0; i < this.coupsRendus(); i++){
          this.holes[(i)%this.holes.length].coupsRendus++;
        }
        this.holes.sort(function(a,b){
          return parseFloat(a.num) - parseFloat(b.num);
        });

    }
  });
