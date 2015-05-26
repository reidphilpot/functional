var _ = require('underscore')

module.exports = function property(k) {
  var components

  if (!k) return _.identity
  
  components = k.split('.')
  
  return function prop(d) {  
    return components.reduce(value, d)

    function value(obj, k) {
      if (_.isUndefined(obj) || _.isNull(obj)) return undefined
      
      return obj[k]
    }
  }
} 