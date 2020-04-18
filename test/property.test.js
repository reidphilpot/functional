import { expect } from 'chai'
import property from '../src/property'

describe('property', () => {
  it('should return a function', () => {
    expect(property('foo')).to.be.instanceof(Function)
  })

  it('should return value of requested property', () => {
    const obj = { foo: 'bar' }
    const prop = property('foo')

    expect(prop(obj)).to.equal('bar')
  })

  it('should return deep value of requested property', () => {
    const obj = { foo: { bar: 'bar' } }
    const prop = property('foo.bar')

    expect(prop(obj)).to.equal('bar')
  })

  it('should return undefined if illegal property requested', () => {
    const obj = { foo: 'bar' }
    const prop = property('bar')

    expect(prop(obj)).to.equal(undefined)
  })

  it('should return passed object if not property requested', () => {
    const obj = { foo: 'bar' }
    const prop = property()

    expect(prop(obj)).to.equal(obj)
  })
})
