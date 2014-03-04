'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('./server');
var injecter = require('gulp-inject');
var templateCache = require('gulp-angular-templatecache');

var srcFiles = {
  js:   './public/javascripts/**/*.js',
  img:  './public/images/**/*',
  sass: './public/stylesheets/**/*.scss',
  tmpl: './public/javascripts/**/*.html',
  html: './public/index.html'
};

var destFolders = {
  js:   './dist/javascripts',
  img:  './dist/images',
  css:  './dist/stylesheets',
  tmpl: './dist/javascripts',
  html: './dist'
};

var destFiles = {
  js:   './dist/javascripts/**/*.js',
  css:  './dist/stylesheets/**/*.css',
  tmpl: './dist/javascripts/**/*.html',
  html: './dist/index.html'
};

// TODO: make this do livereloading
gulp.task('server', function() {
  server.listen(1337);
});

gulp.task('inject', function() {
  gulp.src([destFiles.js, destFiles.css], { read: false })
      .pipe(injecter(srcFiles.html, { ignorePath: '/dist' }))
      .pipe(gulp.dest(destFolders.html));
});

gulp.task('sass', function () {
  gulp.src(srcFiles.sass)
      .pipe(sass())
      .pipe(gulp.dest(destFolders.css));
});

gulp.task('js', function() {
  gulp.src(srcFiles.js)
      .pipe(gulp.dest(destFolders.js));
});

gulp.task('templates', function() {
  gulp.src(srcFiles.tmpl)
      .pipe(templateCache({ root: '/javascripts' }))
      .pipe(gulp.dest(destFolders.tmpl));
});

gulp.task('images', function() {
  gulp.src(srcFiles.img)
      .pipe(gulp.dest(destFolders.img));
});

gulp.task('components', function() {
  gulp.src('./public/components/**/*').pipe(gulp.dest('./dist/components'));
});

gulp.task('watch', function () {
  gulp.watch([srcFiles.img], ['images']);
  gulp.watch([srcFiles.js], ['js']);
  gulp.watch([srcFiles.sass], ['sass']);
  gulp.watch([srcFiles.tmpl], ['templates']);

  gulp.watch([destFiles.js, destFiles.css], ['inject']);
});

gulp.task('deploy:db', require('./tasks/db-deploy'));

gulp.task('default', [
  'components', 'sass', 'js', 'images', 'templates', 'inject', 'server', 'watch'
]);
