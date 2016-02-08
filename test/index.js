'use strict';
var expect = require('chai').expect;
var gulp = require('gulp');
var gargle = require('../index.js');

describe('expand', function() {
  it('should inherit from gulp', function() {
    expect(gargle).to.be.an.instanceOf(gulp.Gulp);
  });
});
