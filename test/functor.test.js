var chai = require('chai')
  , expect = chai.expect
  , functor = require('../functor')

describe('functor', function () {

  it('should upcast value to function', function () {
    var func = functor('foo')

    expect(func()).to.equal('foo')
  })

  it('should return function when passed one', function () {
    var func = functor(function() { return 'foo' })

    expect(func()).to.equal('foo')
  })

})