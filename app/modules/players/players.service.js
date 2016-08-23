angular.
  module('players').
  factory('PlayersService', function(){
    var players = getCurrentPlayersInLocalStorage();
    if(players == null) players = [{id:0,name:"Player 1",index:54,tee:"yellow",gender:"man"}];
    
    function setPlayers(value){
      players = value;
      setCurrentPlayersInLocalStorage(players);
    }
    function getPlayers(){
      return players;
    }
    
    function getCurrentPlayersInLocalStorage(){
      return JSON.parse(localStorage.getItem('cur_players'));
    }
    function setCurrentPlayersInLocalStorage(players){
      localStorage.setItem('cur_players',JSON.stringify(players));      
    }
    
    return {
      setPlayers: setPlayers,
      getPlayers: getPlayers,
    };

});
