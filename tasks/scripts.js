"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src, { since: gulp.lastRun(options.taskName) })
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
      .pipe($.uglify())
      .pipe($.remember(options.taskName))
      .pipe($.concat("main.min.js"))
      .pipe(gulp.dest(options.dst));
  };
};
