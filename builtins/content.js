'use strict';

var builtin = require('../lib/builtin');

module.exports = builtin({
  module: module,
  optionsConfig: {
    type: { def: 'markdown', type: 'string', optional: false },
  },
});
