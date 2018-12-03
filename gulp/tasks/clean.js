const gulp = require('gulp');
const del = require('del');
const config = require('../config');

function clean(cb) {
  del(config.dest.root + '**');
  cb();
}

gulp.task('clean', clean);
