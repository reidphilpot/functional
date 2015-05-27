var chai = require('chai')
  , expect = chai.expect
  , assert = chai.assert
  , pluck = require('../pluck')

describe('pluck', function () {

  it('should return a function', function () {
    assert.isFunction(pluck())
  })

  it('should pluck values from object array', function () {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    
    expect(pluck('name')(stooges)).to.have.members(['moe', 'larry', 'curly'])
  })

})