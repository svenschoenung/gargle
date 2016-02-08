var through = require('through2');
var fs = require('fs');

var Handlebars = require('handlebars');
var PluginError = require('gulp-util').PluginError;

module.exports = function(options) {

  var template = fs.readFileSync(options.template, options.encoding);
  var templateFn = Handlebars.compile(template);

  return through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError('content.yaml',
        'Streams not supported!'));
      return cb();
    }
    if (file.isBuffer()) {
      file.data.contents = file.contents;
      file.contents = new Buffer(templateFn(file.data));
    }
    return cb(null, file);
  });
};
