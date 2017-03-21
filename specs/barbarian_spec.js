var barbarian = require('../barbarian');
var assert = require ('assert');

describe('barbarian', function() {
  it('should be calm at start', function() {
    assert.equal(0, barbarian.anger);
  });
});