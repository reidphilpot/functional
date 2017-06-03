import identity from 'lodash.identity'

module.exports = function property(k) {
  var components

  if (!k) return identity

  components = k.split('.')

  return function prop(d) {
    return components.reduce(value, d)

    function value(obj, k) {
      if (obj == null) return undefined

      return obj[k]
    }
  }
}
