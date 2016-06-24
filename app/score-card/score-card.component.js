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

        this.holes = [
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
        ]; //*/

        this.score = 0;

        this.total = function(){
          this.score = 0;
          for(var i = 0; i < this.holes.length; i++){
            if(this.holes[i].score != "") this.score += this.holes[i].score;
          }
        };

        this.parTotal = 0;
        for(var i = 0; i < this.holes.length; i++){
          this.parTotal += this.holes[i].par;
        }

    }
  });
