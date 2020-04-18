import { expect } from 'chai'
import pluck from '../src/pluck'

describe('pluck', () => {
  it('should return a function', () => {
    expect(pluck()).to.be.instanceof(Function)
  })

  it('should pluck values from object array', () => {
    const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
    expect(pluck('name')(stooges)).to.have.members(['moe', 'larry', 'curly'])
  })
})
