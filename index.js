'use strict';

var util = require('util');
var gulp = require('gulp');

var requireDirectory = require('require-directory');

function Gargle() {
  gulp.Gulp.call(this);
}
util.inherits(Gargle, gulp.Gulp);

var builtins = requireDirectory(module, './builtins', { recurse: false });

for (var builtin in builtins) {
  Gargle.prototype[builtin] = builtins[builtin];
}

var inst = new Gargle();
module.exports = inst;
