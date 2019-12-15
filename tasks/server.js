"use strict";

const server = require("browser-sync").create();

module.exports = function(options) {
  return function() {
    server.init({
      server: {
        baseDir: options.base
      }
    });

    server.watch(options.watch).on("change", server.reload);
  };
};
