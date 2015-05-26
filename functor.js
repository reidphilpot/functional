var _ = require('underscore')

/*  If the specified value is a function, returns the specified value. 
 *  Otherwise, returns a function that returns the specified value.
 */

module.exports = function functor(value) {
  if(_.isFunction(value)) return value
  return function() {
    return value
  }
}