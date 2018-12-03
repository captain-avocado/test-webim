const log = require('fancy-log');
const colors = require('ansi-colors');

const destPath = 'dest/';
const srcPath = 'src/';

const config = {
  env: 'development',
  production: false,
  setEnv: function(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },
  logEnv: function() {
    log(
      'Environment: ',
      colors.bgred(' ' + process.env.NODE_ENV + ' ')
    );
  },

  outputCSS: 'app.css',

  src: {
    root: srcPath,
    styles: srcPath + 'styles/',
    scripts: srcPath + 'scripts/',
    images: srcPath + 'images/',
    fonts: srcPath + 'fonts/',
    lib: srcPath + 'lib/',
    static: srcPath + 'static/'
  },

  dest: {
    root: destPath,
    styles: destPath + 'styles/',
    scripts: destPath + 'scripts/',
    images: destPath + 'images/',
    fonts: destPath + 'fonts/',
    lib: destPath + 'lib/',
  }
};

config.setEnv('development');

module.exports = config;
