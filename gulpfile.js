const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');
const gutil = require('gulp-util');

const isProduction = gutil.env.type === 'production';

gulp.task('js', function () {
  let sources = [
    './src/bootstrap-datepicker/bootstrap-datepicker.js',
    './src/bootstrap-datepicker/bootstrap-datepicker.ko.js',
    './src/index.js'
  ];

  let filename = 'harmony.datepicker.min.js';
  let dist = './dist';

  return gulp.src(sources)
    .pipe(sourcemaps.init())
    .pipe(concat(filename))
    .pipe(isProduction ? uglify() : gutil.noop())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist));
});


gulp.task('css', function () {
  let sources = [
    './src/bootstrap-datepicker/bootstrap-datepicker.standalone.css',
    './src/index.css'
  ];

  let filename = 'harmony.datepicker.min.css';
  let dist = './dist';

  return gulp.src(sources)
    .pipe(concat(filename))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist));
});

gulp.task('connect', function () {
  connect.server({
    root: '.',
    livereload: true,
    port: 5000
  });
});

gulp.task('reload', function () {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/**/*.css', ['css']);
  gulp.watch('./dist/*', ['reload']);
});


gulp.task('build', ['js', 'css']);
gulp.task('default', ['build', 'connect', 'watch']);
