angular.
  module('golfCourse').
  factory('GolfCourseService', function(){

    var golf;
    function getGolf(value){
      return golf;
    }
    function setGolf(value){
      golf = value;
    }

    var course;
    function getCourse(value){
      return course;
    }
    function setCourse(value){
      course = value;
    }

    return {
      getGolf: getGolf,
      setGolf: setGolf,
      getCourse: getCourse,
      setCourse: setCourse,
    };

});
