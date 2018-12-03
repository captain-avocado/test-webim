const gulp = require('gulp');
const config = require('../config');

function watch() {
  gulp.watch(config.src.scripts + '**/*', gulp.series('eslint', 'scripts'));
  gulp.watch(config.src.styles + '**/*', gulp.series('stylelint','styles'));
  gulp.watch(config.src.images + '**/*', gulp.series('images'));
  gulp.watch([config.src.root + '*.html', config.src.fonts + '**/*', config.src.static + '**/*'], gulp.series('copy'));
}

gulp.task('watch', watch);
