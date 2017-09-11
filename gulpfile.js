const gulp = require('gulp');
const splittable = require('splittable');

function split() {
  splittable({
    modules: [
      './src/app.js',
    ],
    writeTo: 'dist/',
  })
}

gulp.task('default', split);
