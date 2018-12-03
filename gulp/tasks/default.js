const gulp = require('gulp');

gulp.task('default', gulp.series(
    'build:dev',
    gulp.parallel(
      'watch',
      'server'
      )
));

