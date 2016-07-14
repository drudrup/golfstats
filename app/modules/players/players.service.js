angular.
  module('players').
  factory('PlayersService', function(){
    var players;
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
