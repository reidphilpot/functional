module.exports = function partial() {
  var fn = arguments[0]
    , args = Array.prototype.slice.call(arguments, 1)
    , slice = Array.prototype.slice

  return function () {
    return fn.apply(this, args.concat(slice.call(arguments,0)))
  }
}