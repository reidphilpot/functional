import { expect } from 'chai'
import functor from '../src/functor'

describe('functor', function () {
  it('should upcast value to function', () => {
    const func = functor('foo')
    expect(func()).to.equal('foo')
  })

  it('should return function when passed one', () => {
    const func = functor(() => 'foo')
    expect(func()).to.equal('foo')
  })
})
