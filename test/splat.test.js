var chai = require('chai')
  , expect = chai.expect
  , splat = require('../src/splat')

describe('splat', function () {

  var squareMap = splat(function (n) {
    return n*n
  })

  it('should return an instance of array', function () {
    expect(squareMap([1, 2, 3, 4, 5])).to.be.instanceof(Array)
  })

  it('should apply function to each element of array', function () {
    expect(squareMap([1, 2, 3, 4, 5])).to.have.members([1, 4, 9, 16, 25])
  })

})
