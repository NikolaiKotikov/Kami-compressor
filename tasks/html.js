"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src)
      .pipe(
        $.nunjucksRender({
          path: options.path
        })
      )
      .pipe($.removeEmptyLines())
      .pipe(gulp.dest(options.dst));
  };
};
