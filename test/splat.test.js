import { expect } from 'chai'
import splat from '../src/splat'

describe('splat', () => {
  const squareMap = splat(n => n * n)

  it('should return an instance of array', () => {
    expect(squareMap([1, 2, 3, 4, 5])).to.be.instanceof(Array)
  })

  it('should apply function to each element of array', () => {
    expect(squareMap([1, 2, 3, 4, 5])).to.have.members([1, 4, 9, 16, 25])
  })
})
