const {
  src,
  dest
}               = require('gulp');
const config    = require('../config.js');
const changed 	= require('gulp-changed');


module.exports = function docs() {

  return src(config.app.fonts)
    .pipe(changed(config.dist.fonts))   // Смотрим изменились ли файлы
    .pipe(dest(config.dist.fonts))      // Переносим шрифты в public/fonts

};