var chai = require('chai')
  , expect = chai.expect
  , slugify = require('../slugify')

describe('slugify', function () {

  it('should convert words into a slug', function () {
    expect(slugify('foo bar')).to.equal('foo-bar')
  })

  it('should handle no arguments', function () {
    expect(slugify()).to.equal('')
  })

})