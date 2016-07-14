angular.
  module('players').
  factory('PlayersService', function(){
    var players = [{id:0,name:"Player 1",index:54,tee:"red",sexe:"man"}];
    function setPlayers(value){
      players = value;
    }
    function getPlayers(){
      return players;
    }
    return {
      setPlayers: setPlayers,
      getPlayers: getPlayers,
    };

});
