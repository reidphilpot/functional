import { expect } from 'chai'
import negate from '../src/negate'

const noop = () => {}

describe('negate', () => {
  it('should return a function', () => {
    expect(negate(noop)).to.be.instanceof(Function)
  })

  it('should negate result of passed function', () => {
    const test = negate(() => true)
    expect(test()).to.equal(false)
  })

  it('should filter falsy values', () => {
    const isFalsy = negate(Boolean)
    expect([-2, -1, 0, 1, 2].filter(isFalsy)).to.have.members([0])
  })
})
