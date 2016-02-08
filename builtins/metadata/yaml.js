var frontMatter = require('gulp-front-matter');

module.exports = function(options) {
  return frontMatter({
    property: options.to,
    remove: options.strip,
  });
};
