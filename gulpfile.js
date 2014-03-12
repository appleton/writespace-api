'use strict';

var _ = require('lodash');
var through = require('through2');
var gulp = require('gulp');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var injecter = require('gulp-inject');
var bundle = require('gulp-bundle');
var useref = require('gulp-useref');
var template = require('gulp-template');
var templateCache = require('gulp-angular-templatecache');

var server = require('./server');

// TODO: make this do livereloading
gulp.task('server', function() {
  server.listen(1337);
});

gulp.task('clean', function() {
  return gulp.src('./tmp', { read: false }).pipe(clean());
});

gulp.task('clean:build', function() {
  return gulp.src('./dist', { read: false }).pipe(clean());
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

gulp.task('html', function() {
  var env = process.env.NODE_ENV || 'development';
  var config = require('./config.json')[env];

  return gulp.src('./public/index.html')
             .pipe(template(config))
             .pipe(gulp.dest('./tmp'));
});

gulp.task('inject', ['html', 'sass', 'js', 'templates'], function() {
  var src = ['./tmp/javascripts/**/*.js', './tmp/stylesheets/**/*.css'];
  return gulp.src(src, { read: false })
             .pipe(injecter('./tmp/index.html', { ignorePath: '/tmp' }))
             .pipe(gulp.dest('./tmp'));
});

gulp.task('build:compile', ['inject','components'], bundle('./tmp/index.html', {
    appDir: 'tmp',
    buildDir: 'dist',
    minify: true,
    minifyJs: { mangle: false }
  }
));

gulp.task('images', function() {
  return gulp.src('./public/images/**/*')
             .pipe(gulp.dest('./tmp/images'));
});

gulp.task('build:fonts', function() {
  var src = [
    './public/**/fonts/*.eot', './public/**/fonts/*.svg',
    './public/**/fonts/*.ttf', './public/**/fonts/*.woff',
    './public/**/fonts/*.otf'
  ];
  return gulp.src(src)
             // Remove any nesting from the file path and stick them all in
             // /fonts
             .pipe(through.obj(function(data, enc, cb) {
                var path = data.path;
                var cwd = process.cwd();
                var fileName = _.last(path.split(cwd + '/public/components'));

                fileName = _.last(fileName.split('/fonts/'));
                data.path = cwd + '/fonts/' + fileName;
                this.push(data);

                cb();
              }))
             .pipe(gulp.dest('./dist/fonts'));
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

gulp.task('build:rev', ['build:html'], function() {
  return gulp.src(['./dist/*.js', './dist/*.css'])
    .pipe(clean())
    .pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});

gulp.task('build:replace', ['build:rev'], function() {
  var replacements = require('./dist/rev-manifest.json');

  return gulp.src('./dist/index.html')
    .pipe(replace('/application.js', replacements['/application.js']))
    .pipe(replace('/application.css', replacements['/application.css']))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:noclean', ['build:fonts', 'build:images', 'build:replace']);

gulp.task('build', ['clean:build'], function() {
  return gulp.run('build:noclean');
});

gulp.task('deploy:db', require('./tasks/db-deploy'));


// TODO: could probably loose everything from here if I can get inject and sass
// working as middleware in the app
gulp.task('watch', function () {
  gulp.watch(['./public/images/**/*'], ['images']);
  gulp.watch(['./public/javascripts/**/*.js'], ['js']);
  gulp.watch(['./public/stylesheets/**/*.scss'], ['sass']);
  gulp.watch(['./public/javascripts/**/*.html'], ['templates']);
  gulp.watch(['./public/index.html'], ['html']);

  gulp.watch([
    './tmp/javascripts/**/*.js',
    './tmp/stylesheets/**/*.css',
    './tmp/index.html'
  ], ['inject']);
});

gulp.task('default', ['components', 'images', 'inject', 'server', 'watch']);
