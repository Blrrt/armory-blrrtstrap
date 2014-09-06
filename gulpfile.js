var autoprefixer = require('gulp-autoprefixer');
var csslint = require('gulp-csslint');
var gulp = require('gulp');
var nib = require('nib');
var stylus = require('gulp-stylus');

gulp.task('lint', ['stylus'], function () {
  return gulp.src('build/index.css')
    .pipe(csslint({
      'adjoining-classes': false,
      'box-model': false,
      'compatible-vendor-prefixes': false,
      'fallback-colors': false,
      'font-sizes': false,
      'gradients': false,
      'important': false,
      'known-properties': false,
      'shorthand': false
    }))
    .pipe(csslint.reporter());
});

gulp.task('stylus', function () {
  return gulp.src('index.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['lint']);
