const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const size = require('gulp-size');
const gulpif = require('gulp-if');
const isFile = gulpif.isFile;
const config = require('../config');

function images() {
  return gulp
    .src([config.src.images + '**/*', `!${config.src.svg}*.svg`])
    .pipe(gulpif(isFile, cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      svgoPlugins:[{ cleanupIDs: false }],
      use: [pngquant()]
    }))))
    .pipe(gulp.dest(config.dest.images))
    .pipe(size({
      title: 'Size',
      showFiles: true,
      showTotal: false
    }));
}

gulp.task('images', images);


