'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var injecter = require('gulp-inject');

gulp.task('inject', function() {
  gulp.src(['./app/**/*.js', './css/**/*.css'], { read: false })
      .pipe(injecter('./app/index.html'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('connect', connect.server({
  root: [__dirname, 'dist'],
  port: 1337,
  livereload: true,
  open: { browser: 'Google Chrome' }
}));

gulp.task('html', function () {
  gulp.src('./**/*.html').pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*', './css/**/*'], ['inject', 'html']);
});

gulp.task('default', ['inject', 'connect', 'watch']);
