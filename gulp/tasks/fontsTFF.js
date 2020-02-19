const {
  src,
  dest
}               = require('gulp');
const config    = require('../config.js');
const {
  ttf2woff,
  changed
} 		          = require('gulp-load-plugins')();


module.exports = function fontsTFF() {

  return src(config.app.fontsttf)
    .pipe(changed(config.dist.fonts))   // Смотрим изменились ли файлы
    .pipe(ttf2woff())                   // Конвертируем шрифты
    .pipe(dest(config.dist.fonts))      // Переносим шрифты в public/fonts

};