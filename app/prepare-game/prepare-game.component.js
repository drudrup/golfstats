// Register the 'prepareGame' component on the 'prepareGame' module,
angular.
  module('prepareGame').
  component('prepareGame',{
    templateUrl: 'prepare-game/prepare-game.tpl.html',
    controller: ['$http', 'UserDataService', function PrepareGameController($http, UserDataService) {
      var self = this;

      self.selectedGolf = "";
      self.selectedParcours = "";
      self.selectedTee = "";
      self.golfindex = 54;

      $http.get('golfs/golfs.json').then(function(response) {
        self.golfs = response.data;
        self.selectedGolfName = self.golfs[0].name;
        self.selectedGolf = self.golfs[0];
        self.selectedParcoursName = self.selectedGolf.parcours[0].name;
        self.selectedParcours = self.selectedGolf.parcours[0];
        self.selectedTeeColor = self.selectedGolf.parcours[0].tees[0].color;
        self.selectedTee = self.selectedGolf.parcours[0].tees;
      });

      self.updateParcours = function(){

        for(var i=0; i<self.golfs.length; i++){
          if(self.golfs[i].name == self.selectedGolfName){
            self.selectedGolf = self.golfs[i];
          }
        }
        self.selectedParcoursName = self.selectedGolf.parcours[0].name;
        self.selectedParcours = self.selectedGolf.parcours[0];
        self.selectedTeeColor = self.selectedGolf.parcours[0].tees[0].color;
        self.selectedTee = self.selectedGolf.parcours[0].tees;
      };

      self.updateTees = function(){

        for(var i=0; i<self.selectedGolf.parcours.length; i++){
          if(self.selectedGolf.parcours[i].name == self.selectedParcoursName){
            self.selectedParcours = self.selectedGolf.parcours[i];
          }
        }
        self.selectedTeeColor = self.selectedParcours.tees[0].color;
        self.selectedTee = self.selectedParcours.tees[0];
      };


      self.start = function(){
        console.log(self.golfindex);
        for(var i=0; i<self.selectedParcours.tees.length; i++){
          if(self.selectedParcours.tees[i].color == self.selectedTeeColor){
            self.selectedTee = self.selectedParcours.tees[i];
          }
        }
        /*var datas = {
          "golf": self.selectedGolf,
          "parcours": self.selectedParcours,
          "tee": this.selectedTee,
          "index": this.index
        };*/
        UserDataService.setSelectedGolf(self.selectedGolf);
        UserDataService.setSelectedParcours(self.selectedParcours);
        UserDataService.setSelectedTee(self.selectedTee);
        UserDataService.setIndex(self.golfindex);
        console.log(self.selectedTee);
      }
    }]
  });


