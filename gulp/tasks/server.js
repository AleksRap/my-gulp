const {
  watch,
  series
}                 = require('gulp');
const config 	    = require('../config.js');
const browserSync = require('browser-sync').create();

const templates   = require('./templates');
const styles      = require('./styles');
const stylesLibs  = require('./styles-libs');
const js          = require('./js');
const jsLibs      = require('./js-libs');
const fonts       = require('./fonts');
const fontsTFF    = require('./fontsTFF');
const img         = require('./img');
const svg         = require('./svg');
const sprite      = require('./sprite');
const docs        = require('./docs');
const videos      = require('./videos');


module.exports = function server(done) {
  browserSync.init({
    server: config.dist.dist,
    notify: false,
    cors: true
  });                                                                                                         // Инициализируем сервер

  watch(config.watch.pug, { usePolling: true }, series(templates));                                           // Следим за именениями в папке templates
  watch(config.watch.html).on('change', browserSync.reload);                                                  // Следим за именениями в папке public (только файлы с расширением .html)
  watch(config.watch.styles, { usePolling: true }, series(styles)).on('change', browserSync.reload);          // Следим за изменениями в папке styles (только файлы с расширением .scss)
  watch(config.watch.stylesLibs, { usePolling: true }, series(stylesLibs)).on('change', browserSync.reload);  // Следим за изменениями в папке styles, файл libs.css
  watch(config.watch.scripts, { usePolling: true }, series(js)).on('change', browserSync.reload);             // Следим за изменениями в папке js (кроме файла libs.js)
  watch(config.watch.scriptsLibs, { usePolling: true }, series(jsLibs)).on('change', browserSync.reload);     // Следим за изменениями в папке js, файл libs.js
  watch(config.watch.fonts, series(fonts)).on('change', browserSync.reload);                                  // Следим за именениями в папке fonts (только файлы с расширением .woff)
  watch(config.watch.fontsttf, series(fontsTFF)).on('change', browserSync.reload);                            // Следим за именениями в папке fonts (только файлы с расширением .ttf)
  watch(config.watch.img, series(img)).on('change', browserSync.reload);                                      // Следим за именениями в папке img
  watch(config.watch.svg, series(svg)).on('change', browserSync.reload);                                      // Следим за именениями в папке svg (кроме папки sprite)
  watch(config.watch.sprite, series(sprite)).on('change', browserSync.reload);                                // Следим за именениями в папке sprite
  watch(config.watch.docs, series(docs)).on('change', browserSync.reload);                                    // Следим за именениями в папке docs
  watch(config.watch.videos, series(videos)).on('change', browserSync.reload);                                // Следим за именениями в папке videos

  return done();                                                                                              // Оповещаем об окончании выполнения
};