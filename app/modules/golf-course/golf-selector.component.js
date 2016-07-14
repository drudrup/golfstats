// Register the 'golfSelector' component on the 'golfCourse' module,
angular.
  module('golfCourse').
  component('golfSelector',{
    templateUrl: 'modules/golf-course/golf-course-selector.tpl.html',
    controller: ['$http', 'GolfCourseService', function GolfCourseSelectorController($http, GolfCourseService){
      var self = this;
      
      self.golfClubs = new Object; // Liste des clubs de golf
      self.golfCourses = new Object; // Liste des parcours pour un golf
      self.selectedGolfClub = new Object; // Le club de golf sélectionné
      self.selectedCourse = {name:"unknown",code:0}; // L'index du parcours sélectionné
      self.selectedGolfIndex = null; // L'index du golf sélectionné
      
      // Charger la liste des clubs de golf
      $http.get('golfs/_golf-index.json').then(function(response) {
        self.golfClubs = response.data;
        self.selectedGolfIndex = 0;
        var golfNames = new Array();
        for(var i = 0; i <self.golfClubs.length; i++){
          golfNames.push(self.golfClubs[i].name);
        }
        $( "#selectGolf" ).autocomplete({
          source: golfNames,
          select: function(event, ui){
            self.loadGolfCourses(ui.item.label);
          }
        });
      });
      
      // Charger le golf sélectionné
      self.loadGolfCourses = function(index){
        self.selectedGolfClub = self.golfClubs.find(function(golf){return golf.name == this},index);
        self.selectedGolfIndex = self.selectedGolfClub.code;
          
        $http.get('golfs/'+self.selectedGolfClub.file).then(function(response) {
          self.golfCourses = response.data.terrains;
          //self.selectedCourse.code = self.golfCourses[0].code;
        });
      }
      
      
      // Update
      self.updateGolfCourseService = function(index){
        var golf = self.selectedGolfClub;
        var parcours = self.golfCourses.find(function(course){return course.code == this},index);
        self.selectedCourse = self.golfCourses.find(function(course){return course.code == this},index);
        console.log(golf);
        console.log(parcours);
      }
      
      // Reset Selected Golf Index
      self.resetSelectedGolfIndex = function(){
        self.selectedGolfIndex = 0;
      }
    }]
  });

