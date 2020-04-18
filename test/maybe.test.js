import { expect } from 'chai'
import maybe from '../src/maybe'

const noop = () => {}

describe('maybe', () => {
  it('should return a function', () => {
    expect(maybe(noop)).to.be.instanceof(Function)
  })

  it('should be undefined when no parameters are passed to function', () => {
    expect(maybe(noop)()).to.equal(undefined)
  })

  it('should return argument if argument is undefined or null', () => {
    expect(maybe(noop)(null)).to.equal(null)
    expect(maybe(noop)(undefined)).to.equal(undefined)
  })

  it('should return true if passes truth test', () => {
    const trueIfFoo = (value) => value === 'foo'

    expect(maybe(trueIfFoo)('foo')).to.equal(true)
    expect(maybe(trueIfFoo)('bar')).to.equal(false)
  })
})
