'use strict';

var browserSync = require('browser-sync').create();
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var watch       = require('gulp-watch');

gulp.task('styles', function () {
  return gulp.src('assets/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/dist/styles'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    files: ['public/**/*.php'],
    watchOptions: {
      usePolling: true
    },
    proxy: 'http://192.168.33.10'
  });
  watch(['assets/styles/**/*.scss'], {
    usePolling: true
  }, function () {
    gulp.start('styles');
  });
});
