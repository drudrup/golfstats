angular.
  module('golfCourse').
  factory('GolfCourseService', function(){

    var golfsList;
    function getGolfsList(){
      return golfsList;
    }
    function setGolfsList(value){
      golfsList = value;
    }

    var golf;
    function getGolf(){
      return golf;
    }
    function setGolf(value){
      golf = value;
    }

    var course;
    function getCourse(){
      return course;
    }
    function setCourse(value){
      course = value;

      // Nombre de trous
      course.holesCount = Object.keys(course.tees[0].holes).length;

      // Calcul du Par
      var par = 0;
      for (var i = 1 ; i <= course.holesCount ; i++){
        par = par-(-course.tees[0].holes[i].par);
      }
      course.par = par;
    }

    return {
      getGolfsList: getGolfsList,
      setGolfsList: setGolfsList,
      getGolf: getGolf,
      setGolf: setGolf,
      getCourse: getCourse,
      setCourse: setCourse,
    };

});
