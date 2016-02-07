var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('default', ['less', 'watch', 'scripts']);

gulp.task('watch', function(){
	gulp.watch('./assets/less/*.less', ['less']);
	gulp.watch('./assets/js/*.js', ['scripts']);
	});

gulp.task('less', function () {
  return gulp.src('./assets/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('../public'))
});

gulp.task('scripts', function() {
	return gulp.src([
		'./bower_components/jquery/dist/jquery.js',
		'./bower_components/bootstrap/dist/js/bootstrap.js',
		'./bower_components/bootstrap/js/collapse.js',
		'./assets/js/functions.js'
		])
	.pipe(concat('scripts.js'))
	.pipe(minify())
	.pipe(gulp.dest('../public'))
});