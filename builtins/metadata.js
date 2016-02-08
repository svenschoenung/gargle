'use strict';

var builtin = require('../lib/builtin');

module.exports = builtin({
  module: module,
  optionsConfig: {
    type: { def: 'yaml', type: 'string', optional: false },
    to: { def: 'data.meta', type: 'string', optional: false },
    strip: { def: true, type: 'string', optional: false },
  },
});
