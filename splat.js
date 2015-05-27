module.exports = function splat (fn) {
  return function (list) {
    return Array.prototype.map.call(list, fn)
  }
}