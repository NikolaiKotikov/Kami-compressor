"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src)
      .pipe(
        $.imagemin([
          $.imagemin.optipng({ optimizationLevel: 3 }),
          $.imagemin.jpegtran({ progressive: true })
        ])
      )
      .pipe(gulp.dest(options.dst));
  };
};
