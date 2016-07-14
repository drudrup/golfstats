angular.
  module('golfCourse').
  factory('GolfCourseService', function($http){

    var name = "";
    var code = 0;
    var courses = new Array();
    
    
    // Charger la liste des clubs de golf
    var listeGolfs = new Array();
    var listeGolfsReady = false;
    $http.get('golfs/_golf-index.json').then(function(response) {
      listeGolfs = response.data;
      listeGolfsReady = true;
    });
    
    function getGolfs(){
      if(listeGolfsReady){
        if(listeGolfs.length > 0){
          return listeGolfs
        }else{
          return "No golf found";
        }
        
      }else{
        return "File not found";
      }
    }
    
    return {
      ready: listeGolfsReady,
      golfs: getGolfs,
    };

});
