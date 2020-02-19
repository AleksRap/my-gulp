'use strict';

module.exports = {

  app: {
    pug:            'src/templates/*.pug',
    styles:         'src/styles/style.scss',
    stylesLibs:     'src/styles/libs.css',
    scripts:        'src/js/script.js',
    scriptsLibs:    'src/js/libs.js',
    fonts:          'src/fonts/**/*.woff',
    fontsttf:       'src/fonts/**/*.ttf',
    img:            'src/images/**/*.{png,jpg}',
    svg:            ['src/svg/**/*.svg', '!src/svg/sprite/**/*.svg'],
    sprite:         'src/svg/sprite/*',
    spriteStyles:   'src/styles/sprite/',
    docs:           'src/docs/**/*',
    videos:         'src/videos/**/*'
  },

  watch: {
    pug:            'src/templates/**/*.pug',
    html:           'public/*.html',
    styles:         'src/styles/**/*.scss',
    stylesLibs:     'src/styles/libs.css',
    scripts:        ['src/js/**/*.js', '!src/js/libs.js'],
    scriptsLibs:    'src/js/libs.js',
    fonts:          'src/fonts/**/*.woff',
    fontsttf:       'src/fonts/**/*.ttf',
    img:            'src/images/*',
    svg:            ['src/svg/**/*.svg', '!src/images/sprite/**/*.svg'],
    sprite:         'src/images/sprite/**/*.svg',
    docs:           'src/docs/**/*',
    videos:         'src/videos/**/*'
  },

  dist: {
    dist:           'public/',
    styles:         'public/css/',
    scripts:        'public/js/',
    fonts:          'public/fonts/',
    img:            'public/images/',
    svg:            'public/svg/',
    html:           'public/**/*.html',
    docs:           'public/docs/',
    videos:         'public/videos/'
  }

};