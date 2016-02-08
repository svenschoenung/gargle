var markdown = require('gulp-markdown');

module.exports = function(options) {
  return markdown({});
};
module.exports.marked = markdown.marked;
