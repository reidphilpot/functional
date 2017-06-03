import { expect } from 'chai'
import isFunction from '../src/isfunction'

const noop = () => {}

describe('isfunction', function () {
  it('should return true if passed function', () => {
    expect(isFunction(noop)).to.be.true
  })

  it('should false if not a function', () => {
    expect(isFunction(1)).to.be.false
    expect(isFunction({})).to.be.false
    expect(isFunction(null)).to.be.false
    expect(isFunction('foo')).to.be.false
    expect(isFunction([])).to.be.false
    expect(isFunction(false)).to.be.false
  })
})
