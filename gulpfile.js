"use strict";

const gulp = require("gulp");
const paths = require("./package.json").config;

lazyRequireTask("styles:dev", "./tasks/styles", {
  src: paths.base + "/sass/main.{sass,scss}",
  dst: paths.dst + "/css/",
  isDevelopment: true
});

lazyRequireTask("styles:build", "./tasks/styles", {
  src: paths.base + "/sass/main.{sass,scss}",
  dst: paths.dst + "/css/",
  isDevelopment: false
});

lazyRequireTask("scripts", "./tasks/scripts", {
  src: [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/slick-carousel/slick/slick.min.js",
    "app/js/libs/jquery-ui-1.12.1.custom/jquery-ui.min.js",
    "app/js/libs/digitalBush-jquery.maskedinput-9672630/dist/jquery.maskedinput.min.js",
    "app/js/main.js"
  ],
  dst: paths.dst + "/js/"
});

lazyRequireTask("svg", "./tasks/svg", {
  src: paths.base + "/icons/svg/**/*.svg",
  dst: paths.dst + "/img/"
});

lazyRequireTask("server", "./tasks/server", {
  base: paths.dst,
  watch: paths.dst + "/**/*.*"
});

lazyRequireTask("clean", "./tasks/clean", {
  dst: paths.dst
});

lazyRequireTask("copy", "./tasks/copy", {
  src: paths.base + "/assets/**",
  dst: paths.dst
});

lazyRequireTask("imagemin", "./tasks/imagemin", {
  src: paths.dst + "/img/**/*.{png,jpg}",
  dst: paths.dst + "/img"
});

lazyRequireTask("archive", "./tasks/archive", {
  src: paths.dst + "/**",
  dst: paths.dst + "/",
  name: "build.zip"
});

lazyRequireTask("html", "./tasks/html", {
  src: paths.base + "/html/pages/**",
  dst: paths.dst + "/",
  path: [
    paths.base + "/html/layout",
    paths.base + "/html/components",
    paths.base + "/html/templates"
  ]
});

gulp.task("watch", function() {
  gulp.watch(paths.base + "/sass/**/*.{scss,sass}", gulp.series("styles:dev"));
  gulp.watch(paths.base + "/icons/svg/**/*.svg", gulp.series("svg"));
  gulp.watch(paths.base + "/js/main.js", gulp.series("scripts"));
  gulp.watch(paths.base + "/assets/**/*.*", gulp.series("copy"));
  gulp.watch(paths.base + "/html/**/*.*", gulp.series("html"));
});

gulp.task(
  "build",
  gulp.series(
    gulp.series("clean", "copy"),
    gulp.parallel("imagemin", "svg", "styles:build", "scripts", "html"),
    "archive"
  )
);

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("copy", "styles:dev", "svg", "scripts", "html"),
    gulp.parallel("server", "watch")
  )
);

function lazyRequireTask(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);
    return task(callback);
  });
}
