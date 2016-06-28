angular.
  module('userData').
  factory('UserDataService', function(){

    var selectedGolf = "";
    function setSelectedGolf(golf){
      selectedGolf = golf;
    }
    function getSelectedGolf(){
      return selectedGolf;
    }

    var selectedParcours = "";
    function setSelectedParcours(parcours){
      selectedParcours = parcours;
    }
    function getSelectedParcours(){
      return selectedParcours;
    }

    var selectedTee = "";
    function setSelectedTee(tee){
      selectedTee = tee;
    }
    function getSelectedTee(){
      return selectedTee;
    }

    var index = 54;
    function setIndex(idx){
      index = idx;
    }
    function getIndex(){
      return index;
    }


    return {
      setSelectedGolf: setSelectedGolf,
      getSelectedGolf: getSelectedGolf,
      setSelectedParcours: setSelectedParcours,
      getSelectedParcours: getSelectedParcours,
      setSelectedTee: setSelectedTee,
      getSelectedTee: getSelectedTee,
      setIndex: setIndex,
      getIndex: getIndex
    };

});
