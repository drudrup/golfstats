// Register the 'playersCreation' component on the 'players' module,
angular.
  module('players').
  component('playersCreation',{
    templateUrl: 'modules/players/players.tpl.html',
    controller: ['PlayersService', function PlayersCreationController(PlayersService){
      var self = this;

      self.players = [{id:0,name:"Player 1",index:54}];

      self.addPlayer = function(){
        self.players.push({id:self.players.length,name:"Player "+(self.players.length+1),index:54});
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

