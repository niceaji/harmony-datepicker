const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');


gulp.task('js', function () {
  let sources = [
    './src/bootstrap-datepicker/bootstrap-datepicker.js',
    './src/bootstrap-datepicker/bootstrap-datepicker.ko.js',
    './src/index.js'
  ];

  let filename = 'datepicker.min.js';
  let dist = './dist';

  return gulp.src(sources)
    .pipe(sourcemaps.init())
    .pipe(concat(filename))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist));
});


gulp.task('css', function () {
  let sources = [
    './src/bootstrap-datepicker/bootstrap-datepicker.css',
    './src/bootstrap-datepicker/bootstrap-datepicker.standalone.css',
    './src/index.css'
  ];

  let filename = 'datepicker.min.css';
  let dist = './dist';

  return gulp.src(sources)
    .pipe(concat(filename))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist));
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
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


gulp.task('default', ['js', 'css', 'connect', 'watch']);
