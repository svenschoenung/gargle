'use strict';

var path = require('path');
var requireDirectory = require('require-directory');
var validateOptionsFactory = require('./options');

module.exports = function(builtinOptions) {
  var builtinModule = builtinOptions.module;
  var builtinOptionsConfig = builtinOptions.optionsConfig;

  var validateOptions = validateOptionsFactory(builtinModule);

  var builtinName = path.parse(builtinModule.filename).name;
  var builtinTypes = requireDirectory(builtinModule, './' + builtinName);
  var builtin = function(options) {
    options = validateOptions(options, builtinOptionsConfig);
    return builtinTypes[options.type](options);
  };
  for (var builtinType in builtinTypes) {
    builtin[builtinType] = function(options) {
      options = validateOptions(options, builtinOptionsConfig);
      return builtinTypes[builtinType](options);
    };
  }
  return builtin;
};
