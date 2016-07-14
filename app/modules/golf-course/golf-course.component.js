// Register the 'golfCourse' component on the 'golfCourse' module,
angular.
  module('golfCourse').
  component('golfCourse',{
    templateUrl: 'modules/golf-course/golf-course.tpl.html',
    controller: function GolfCourseController(GolfCourseService){
      var self = this;
      
      self.golfs = GolfCourseService.ready;
      //console.log(self.golfs);
      
      self.askForGolfsList = function(){
        if(!GolfCourseService.ready){
          console.log(self.golfs);
          setTimeout(self.askForGolfsList(),100);
        }else{
          console.log(self.golfs);
          self.golfs = GolfCourseService.golfs;
        }
      }
      self.askForGolfsList();
      
      //this.golf = "hey";
    }
  });
