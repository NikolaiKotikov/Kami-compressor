"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src, { sourcemaps: options.isDevelopment })
      .pipe(
        $.plumber({
          errorHandler: $.notify.onError(function(err) {
            return {
              title: options.taskName,
              message: err.message
            };
          })
        })
      )
      .pipe($.sassGlob())
      .pipe($.sass())
      .pipe(
        $.autoprefixer({
          cascade: false
        })
      )
      .pipe(
        $.csso({
          comments: options.isDevelopment
        })
      )
      .pipe($.rename({ suffix: ".min" }))
      .pipe(gulp.dest(options.dst, { sourcemaps: options.isDevelopment }));
  };
};
