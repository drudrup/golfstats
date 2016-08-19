var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', ['less','tpl','js','watch']);
gulp.task('prod', ['less','tpl','js-prod']);

// LESS
gulp.task('less', function () {
  return gulp.src(['./app/less/styles.less'])
    .pipe(less())
    .pipe(gulp.dest('./app/dist/'));
});


// JS
var JSarray = [
  "./app/bower_components/jquery/jquery.min.js",
  "./app/bower_components/jquery-ui/jquery-ui.min.js",
  "./app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
  "./app/bower_components/bootstrap/dist/js/bootstrap.min.js",
  "./app/bower_components/angular/angular.js",
  "./app/bower_components/angular-route/angular-route.js",
  "./app/bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js",
  "./app/app.module.js",
  "./app/app.config.js",
  "./app/modules/*/*.module.js",
  "./app/modules/*/*.component.js",
  "./app/modules/*/*.service.js",
  "./app/modules/templates.js",
  "./app/components/version/version.js",
  "./app/components/version/version-directive.js",
  "./app/components/version/interpolate-filter.js",
  "./app/bower_components/rangeslider.js/dist/rangeslider.js"
]
gulp.task('js', function(){
  return gulp.src(JSarray)
             .pipe(concat("scripts.js"))
             //.pipe(uglify())
             .pipe(gulp.dest("./app/dist/"));
});
gulp.task('js-prod', function(){
  return gulp.src(JSarray)
             .pipe(concat("scripts.js"))
             .pipe(uglify())
             .pipe(gulp.dest("./app/dist/"));
});

// HTML templates
gulp.task('tpl', function(){
  return gulp.src('./app/modules/*/*.tpl.html')
             .pipe(templateCache({'standalone':true}))
             .pipe(gulp.dest("./app/modules/"));
});

// Watch
gulp.task('watch', function () {
	gulp.watch(['./app/modules/*/*.tpl.html'], ['tpl','js']);
	gulp.watch(['./app/modules/*/*.js'], ['js']);
	gulp.watch(['./app/less/*.less'], ['less']);
});
