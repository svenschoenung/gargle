'use strict';

var schema = require('schema-inspector');
var extend = require('extend');
var util = require('util');
var gutil = require('gulp-util');

module.exports = function(aModule) {
  return function opts(options, sanitization, validation) {
    if (util.isNullOrUndefined(validation)) {
      validation = sanitization;
    }
    sanitization = {
      type: 'object',
      properties: sanitization,
    };
    validation = {
      type: 'object',
      properties: validation,
    };

    options = extend(true, {}, options);
    schema.sanitize(sanitization, options);

    var result = schema.validate(validation, options);
    if (!result.valid) {
      throw new gutil.PluginError(aModule.filename, result.format());
    }

    return options;
  };
};
