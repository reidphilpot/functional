import { expect } from 'chai'
import isFunction from '../src/isfunction'

const noop = () => {}

describe('is function', function () {
  it('should return true if passed function', () => {
    expect(isFunction(noop)).to.equal(true)
  })

  it('should false if not a function', () => {
    expect(isFunction(1)).to.equal(false)
    expect(isFunction({})).to.equal(false)
    expect(isFunction(null)).to.equal(false)
    expect(isFunction('foo')).to.equal(false)
    expect(isFunction([])).to.equal(false)
    expect(isFunction(false)).to.equal(false)
  })
})
