const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');

const log = require('fancy-log');
const config = require('../config');

const svgConfig = {
  mode: {
      symbol: {
          sprite: '../sprite.svg',
          //todo = env vars does not stable
          // example: process.env.NODE_ENV === 'development' ? log(process.env.NODE_ENV, '**') : {
          //     dest: '../tmp/spriteSvgDemo.html'
          // }
      }
  }
};

function svg() {
  return gulp.src(config.src.svg + '*.svg')
      .pipe(svgmin({
          js2svg: {
              pretty: true
          }
      }))
      .pipe(cheerio({
          run: function($) {
              $('[fill]').removeAttr('fill');
              $('[stroke]').removeAttr('stroke');
              $('[style]').removeAttr('style');
          },
          parserOptions: {
              xmlMode: true
          }
      }))
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite(svgConfig))
      .pipe(gulp.dest(config.dest.svg));
}

gulp.task('svg', svg);

