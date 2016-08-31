// Register the 'playersCreation' component on the 'players' module,
angular.
  module('players').
  component('playersCreation',{
    templateUrl: 'players/players.tpl.html',
    controller: ['PlayersService', function PlayersCreationController(PlayersService){
      var self = this;
      var idxCounter = 1; // Counter to create index for players array
      
      
      self.players = PlayersService.getPlayers();
      
      self.addPlayer = function(){
        self.players.push({id:idxCounter++,name:"Joueur "+(idxCounter),index:54,tee:"yellow",gender:"man"});
      }

      self.removePlayer = function(id){
        var index = self.players.map(function(e) { return e.id; }).indexOf(id);
        self.players.splice(index,1);
      }
      
      self.updateGender = function(id,gender){
        var index = self.players.map(function(e) { return e.id; }).indexOf(id);
        self.players[index].gender = gender;
      }

      self.updateTee = function(id,teeColor){
        var index = self.players.map(function(e) { return e.id; }).indexOf(id);
        self.players[index].tee = teeColor;
      }

      self.updatePlayersService = function(){
        PlayersService.setPlayers(self.players);
      }

    }]
  });

