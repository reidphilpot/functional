var chai = require('chai')
  , expect = chai.expect
  , assert = chai.assert
  , negate = require('../negate')

describe('negate', function () {
  
  it('should return a function', function () {
    assert.isFunction(negate(Function.prototype))
  })

  it('should negate result of passed function', function () {
    var test = negate(function() { return true })

    expect(test()).to.be.false
  })

})