// Register the 'playersCreation' component on the 'players' module,
angular.
  module('players').
  component('playersCreation',{
    templateUrl: 'players/players.tpl.html',
    controller: ['PlayersService', function PlayersCreationController(PlayersService){
      var self = this;
      var idxCounter = 0; // Counter to create index for players array
      
      
      self.players = PlayersService.getPlayers();
      
      self.addPlayer = function(){
        self.players.push({id:idxCounter++,name:"Player "+(idxCounter+1),index:54,tee:"yellow",gender:"man"});
      }

      self.removePlayer = function(id){
        var index = self.players.map(function(e) { return e.id; }).indexOf(id);
        self.players.splice(index,1);
      }

      self.updatePlayersService = function(){
        PlayersService.setPlayers(self.players);
      }

    }]
  });

