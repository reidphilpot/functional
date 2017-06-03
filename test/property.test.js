var chai = require('chai')
  , expect = chai.expect
  , assert = chai.assert
  , property = require('../src/property')

describe('property', function () {

  it('should return a function', function () {
    assert.isFunction(property('foo'))
  })

  it('should return value of requested property', function () {
    var obj = { foo: 'bar' }
      , prop = property('foo')

    expect(prop(obj)).to.equal('bar')
  })

  it('should return deep value of requested property', function () {
    var obj = { foo: { bar: 'bar' } }
      , prop = property('foo.bar')

    expect(prop(obj)).to.equal('bar')
  })

  it('should return undefined if illegal property requested', function () {
    var obj = { foo: 'bar' }
      , prop = property('bar')

    expect(prop(obj)).to.be.undefined
  })

  it('should return passed object if not property requested', function () {
    var obj = { foo: 'bar' }
      , prop = property()

    expect(prop(obj)).to.equal(obj)
  })

})
