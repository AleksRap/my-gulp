const {
  src,
  dest
}  	            = require('gulp');
const config 	  = require('../config.js');
const changed		= require('gulp-changed');


module.exports = function docs() {

  return src(config.app.docs)
    .pipe(changed(config.dist.docs))     // Смотрим изменились ли файлы
    .pipe(dest(config.dist.docs));       // Переносим файлы в папку public/docs

};