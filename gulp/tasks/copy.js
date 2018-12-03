const gulp = require('gulp');
const config = require('../config');

function copyFonts() {
  return gulp
    .src(config.src.fonts + '**/*.{ttf,eot,woff,woff2}')
    .pipe(gulp.dest(config.dest.fonts));
}

function copyHTML() {
  return gulp
    .src(config.src.root + '*.html')
    .pipe(gulp.dest(config.dest.root));
}

function copyStatic() {
  return gulp
    .src(config.src.static + '*.*')
    .pipe(gulp.dest(config.dest.root));
}

gulp.task('copy:fonts', copyFonts);
gulp.task('copy:html', copyHTML);
gulp.task('copy:static', copyStatic);
gulp.task('copy', gulp.parallel(
  'copy:html',
  'copy:static',
  'copy:fonts'
));

