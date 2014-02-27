'use strict';

var gulp = require('gulp');
var injecter = require('gulp-inject');

module.exports = function(req, res, next) {
  gulp.src(['../dist/**/*.js', './dist/css/**/*.css'], { read: false })
      .pipe(injecter('../public/index.html'))
      .pipe(gulp.dest('../dist'));
  next();
};
