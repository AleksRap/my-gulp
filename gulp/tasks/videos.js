'use strict';

const {
  src,
  dest
}  	            = require('gulp');
const config 	  = require('../config.js');
const changed		= require('gulp-changed');


module.exports = function videos() {

  return src(config.app.videos)
    .pipe(changed(config.dist.videos))     // Смотрим изменились ли файлы
    .pipe(dest(config.dist.videos));       // Выгружаем в папку public/videos

};