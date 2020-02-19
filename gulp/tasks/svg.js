'use strict';

const {
  src,
  dest
}  	            = require('gulp');
const config 	  = require('../config.js');
const {
  imagemin,
  changed
} 		          = require('gulp-load-plugins')();
const gulpif    = require('gulp-if');
const args      = require('yargs').argv;


module.exports = function svg() {
  const env = args.env || 'dev';

  return src(config.app.svg)
    .pipe(changed(config.dist.svg))                               // Смотрим изменились ли файлы
    .pipe(gulpif((env === 'prod'), imagemin([
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ])))                                                          // Сжимаем svg файлы
    .pipe(dest(config.dist.svg));                                 // Выгружаем в папку public/svg

};