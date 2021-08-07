const mix = require("laravel-mix");
const fs = require("fs");
require('laravel-mix-polyfill');

mix.js('src/app.js', 'dist')
    .react()
    .sourceMaps()
    .setPublicPath('dist')
    .after(() => {
        fs.copyFileSync('./public/index.html', './dist/index.html');
    });
