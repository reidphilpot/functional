var chai = require('chai')
  , expect = chai.expect
  , assert = chai.assert
  , maybe = require('../maybe')
  , noop = function() {}

describe('maybe', function () {

  it('should return a function', function () {
    assert.isFunction(maybe(noop))
  })

  it('should be undefined when no parameters are passed to function', function () {
    expect(maybe(noop)()).to.be.undefined
  })

  it('should return argument if argument is undefined or null', function () {
    expect(maybe(noop)(null)).to.be.null
    expect(maybe(noop)(undefined)).to.be.undefined
  })

  it('should return true if passes truth test', function () {
    var trueIfFoo = function(value) { return value === 'foo' }

    expect(maybe(trueIfFoo)('foo')).to.be.true
    expect(maybe(trueIfFoo)('bar')).to.be.false
  })

})