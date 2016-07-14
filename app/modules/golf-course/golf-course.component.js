// Register the 'golfCourse' component on the 'golfCourse' module,
angular.
  module('golfCourse').
  component('golfCourse',{
    templateUrl: 'modules/golf-course/golf-course.tpl.html',
    controller: ['$http', 'GolfCourseService', function GolfCourseController($http, GolfCourseService){
      var self = this;

      self.golfs = GolfCourseService.getGolfsList();
      self.golfClub = GolfCourseService.getGolf();
      self.golfCourse = GolfCourseService.getCourse();


      if(typeof self.golfs == "undefined"){
        // Charger la liste des clubs de golf et la passer à GolfCourseService
        $http.get('golfs/_golf-index.json').then(function(response) {
          self.golfs = response.data;
          GolfCourseService.setGolfsList(self.golfs);

          self.golfsListReady = true; // just a flag to indicate that the list is loaded
          var golfNames = new Array();
          for(var i = 0; i <self.golfs.length; i++){
            golfNames.push(self.golfs[i].name);
          }
          $("#searchGolf").autocomplete({
            source: golfNames,
            select: function(event, ui){
              self.loadGolf(ui.item.label);
            }
          });
        });
      }else{
        self.golfsListReady = true; // just a flag to indicate that the list is loaded
        var golfNames = new Array();
        for(var i = 0; i <self.golfs.length; i++){
          golfNames.push(self.golfs[i].name);
        }
        $("#searchGolf").autocomplete({
          source: golfNames,
          select: function(event, ui){
            self.loadGolf(ui.item.label);
          }
        });
      }

      // Charger la fiche complète du golf club sélectionné
      // et la liste des parcours du club
      self.loadGolf = function(golfName){

        for(var i = 0; i<self.golfs.length; i++){
          if(self.golfs[i].name == golfName) var selectedGolfClub = self.golfs[i];
        }

        if(typeof selectedGolfClub != "undefined"){
          $http.get('golfs/'+selectedGolfClub.file).then(function(response) {
            self.golfClub = response.data;
          });
        }

      };

      // Update GolfCourseService with selected Golf Club and Course
      self.submit = function(courseCode){
        GolfCourseService.setGolf(self.golfClub);
        for(var i = 0; i<self.golfClub.terrains.length; i++){
          if(self.golfClub.terrains[i].code == courseCode) GolfCourseService.setCourse(self.golfClub.terrains[i]);
        }
      }

    }]
  });

