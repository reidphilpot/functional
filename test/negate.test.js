import { expect, assert } from 'chai'
import negate from '../src/negate'

const noop = () => {}

describe('negate', () => {

  it('should return a function', () => {
    assert.isFunction(negate(noop))
  })

  it('should negate result of passed function', () => {
    const test = negate(() => true)
    expect(test()).to.be.false
  })

  it('should filter falsy values', () => {
    const isFalsy = negate(Boolean)
    expect([-2, -1, 0, 1, 2].filter(isFalsy)).to.have.members([0])
  })

})
