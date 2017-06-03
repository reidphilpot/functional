import { expect } from 'chai'
import partial from '../src/partial'

const noop = () => {}

describe('partial', () => {
  const subtract = (a, b) =>  b - a
  const formal = (greeting, you, me) => `${greeting}, ${you}, my name is ${me}`

  it('should return a function', () => {
    expect(partial(noop)).to.be.instanceof(Function)
  })

  it('should partialy apply a function', () => {
    const sub5 = partial(subtract, 5)
    expect(sub5(20)).to.equal(15)
  })

  it('should partialy apply a function with multiple arguments', () => {
    const greeting = partial(formal, 'Hello', 'John')
    expect(greeting('David')).to.equal('Hello, John, my name is David')
  })
})
