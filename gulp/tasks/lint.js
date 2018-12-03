const gulp = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const config = require('../config');

function eslintFn() {  
  return gulp.src(config.src.scripts + '**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
}

function stylelintFn(done) {
  return gulp.src(config.src.styles + '**/*.scss')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
      failAfterError: false
    }))
}

gulp.task('eslint', eslintFn);
gulp.task('stylelint', stylelintFn)
gulp.task('lint', gulp.parallel(
  'eslint',
  'stylelint'
));

