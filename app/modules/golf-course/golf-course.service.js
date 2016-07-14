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
