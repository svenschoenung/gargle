'use strict';

var builtin = require('../lib/builtin');

module.exports = builtin({
  module: module,
  optionsConfig: {
    type: { def: 'handlebars', type: 'string', optional: false },
    template: { type: 'string', optional: false },
    encoding: { def: 'utf8', type: 'string', optional: false },
  },
});
