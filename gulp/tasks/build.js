const gulp = require('gulp');
const config = require('../config');

function build(cb) {
  return gulp.series(
    gulp.parallel('lint', 'clean'),
    gulp.parallel('styles', 'images', 'scripts', 'copy'),
  )(cb);
}

gulp.task('build', function(cb) {
  config.setEnv('production');
  config.logEnv();
  build(cb);
});

gulp.task('build:dev', function(cb) {
  config.setEnv('development');
  config.logEnv();
  build(cb);
});