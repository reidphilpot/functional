import isFunction from './isfunction'

/*  If the specified value is a function, returns the specified value.
 *  Otherwise, returns a function that returns the specified value.
 */

export default value => isFunction(value)
  ? value
  : () => value
