// Register the 'golfCourse' component on the 'golfCourse' module,
angular.
  module('golfCourse').
  component('golfCourse',{
    templateUrl: 'modules/golf-course/golf-course.tpl.html',
    controller: function GolfCourseController(GolfCourseService){
      this.golf = GolfCourseService.golf;
      //this.golf = "hey";
    }
  });
