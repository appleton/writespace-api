'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var injecter = require('gulp-inject');
var bundle = require('gulp-bundle');
var useref = require('gulp-useref');
var templateCache = require('gulp-angular-templatecache');

var server = require('./server');

// TODO: make this do livereloading
gulp.task('server', function() {
  server.listen(1337);
});

gulp.task('sass', function () {
  return gulp.src('./public/stylesheets/**/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('./tmp/stylesheets'));
});

gulp.task('js', function() {
  return gulp.src('./public/javascripts/**/*.js')
             .pipe(gulp.dest('./tmp/javascripts'));
});

gulp.task('templates', function() {
  return gulp.src('./public/javascripts/**/*.html')
             .pipe(templateCache({ root: '/javascripts' }))
             .pipe(gulp.dest('./tmp/javascripts'));
});

gulp.task('components', function() {
  return gulp.src('./public/components/**/*')
             .pipe(gulp.dest('./tmp/components'));
});

gulp.task('inject', ['sass', 'js', 'templates'], function() {
  var src = ['./tmp/javascripts/**/*.js', './tmp/stylesheets/**/*.css'];
  return gulp.src(src, { read: false })
             .pipe(injecter('./public/index.html', { ignorePath: '/tmp' }))
             .pipe(gulp.dest('./tmp'));
});

gulp.task('build:compile', ['inject', 'components'], bundle('./tmp/index.html', {
    appDir: 'tmp',
    buildDir: 'dist',
    minify: true
  }
));

gulp.task('images', function() {
  return gulp.src('./public/images/**/*')
             .pipe(gulp.dest('./tmp/images'));
});

gulp.task('build:images', function() {
  return gulp.src('./public/images/**/*')
             // TODO: pipe through imageoptim
             .pipe(gulp.dest('./dist/images'));
});

gulp.task('build:html', ['build:compile'], function() {
  return gulp.src('./tmp/index.html')
             .pipe(useref())
             .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build:images', 'build:html']);

gulp.task('deploy:db', require('./tasks/db-deploy'));


// TODO: could probably loose everything from here if I can get inject and sass
// working as middleware in the app
gulp.task('watch', function () {
  gulp.watch(['./public/images/**/*'], ['images']);
  gulp.watch(['./public/javascripts/**/*.js'], ['js']);
  gulp.watch(['./public/stylesheets/**/*.scss'], ['sass']);
  gulp.watch(['./public/javascripts/**/*.html'], ['templates']);

  gulp.watch(['./tmp/javascripts/**/*.js', './tmp/stylesheets/**/*.css'],
             ['inject']);
});

gulp.task('default', [
  'components', 'sass', 'js', 'images', 'templates', 'inject', 'server', 'watch'
]);
