"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src)
      .pipe($.svgstore())
      .pipe($.rename("sprite.svg"))
      .pipe($.imagemin([$.imagemin.svgo()]))
      .pipe(gulp.dest(options.dst));
  };
};
