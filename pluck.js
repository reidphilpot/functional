var splat = require('./splat')
  , property = require('./property')

module.exports = function pluck(attr) {
  return splat(property(attr))
}