var chai = require('chai')
  , expect = chai.expect
  , assert = chai.assert
  , partial = require('../src/partial')

describe('partial', function () {

  var subtract = function(a, b) { return b - a }
    , formal = function (greeting, you, me) {
        return greeting + ", " + you + ", my name is " + me
      }

  it('should return a function', function () {
    assert.isFunction(partial(function() {}))
  })

  it('should partialy apply a function', function () {
    var sub5 = partial(subtract, 5)
    expect(sub5(20)).to.equal(15)
  })

  it('should partialy apply a function with multiple arguments', function () {
    var greeting = partial(formal, 'Hello', 'John')
    expect(greeting('David')).to.equal('Hello, John, my name is David')
  })

})
