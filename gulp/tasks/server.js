const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync').create();

function server() {
    browserSync.init({
        server: {
            baseDir: config.dest.root
        }
    });
    browserSync.watch(config.dest.root + '**/*.*', browserSync.reload);
}

gulp.task('server', server);
