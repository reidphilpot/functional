import { expect, assert } from 'chai'
import maybe from '../src/maybe'

const noop = () => {}

describe('maybe', () => {

  it('should return a function', () => {
    assert.isFunction(maybe(noop))
  })

  it('should be undefined when no parameters are passed to function', () => {
    expect(maybe(noop)()).to.be.undefined
  })

  it('should return argument if argument is undefined or null', () => {
    expect(maybe(noop)(null)).to.be.null
    expect(maybe(noop)(undefined)).to.be.undefined
  })

  it('should return true if passes truth test', () => {
    const trueIfFoo = value => value === 'foo'

    expect(maybe(trueIfFoo)('foo')).to.be.true
    expect(maybe(trueIfFoo)('bar')).to.be.false
  })

})
