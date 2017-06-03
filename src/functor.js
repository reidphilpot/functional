import isFunction from './isfunction'

export default value => isFunction(value)
  ? value
  : () => value
